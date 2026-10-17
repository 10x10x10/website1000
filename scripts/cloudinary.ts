import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

export type CloudinaryUploadResult = {
  secure_url: string;
  public_id: string;
  resource_type: string;
};

export type CloudinaryAuthOptions = {
  cloudName: string;
  apiKey: string;
  apiSecret: string;
};

const MIME_TYPE_PATTERN = /^[a-zA-Z0-9.+-]+\/[a-zA-Z0-9.+-]+$/;

function resolveResourceType(mimeType: string): 'image' | 'video' | 'raw' {
  if (mimeType.startsWith('image/')) return 'image';
  if (mimeType.startsWith('video/') || mimeType.startsWith('audio/')) return 'video';
  return 'raw';
}

export async function uploadToCloudinary(
  buffer: Buffer,
  mimeType: string,
  cloudPath: string,
  auth: CloudinaryAuthOptions
): Promise<CloudinaryUploadResult> {
  if (!Buffer.isBuffer(buffer)) {
    throw new TypeError('file must be a Buffer.');
  }

  if (typeof mimeType !== 'string' || !MIME_TYPE_PATTERN.test(mimeType)) {
    throw new TypeError('mimeType must be a valid MIME type, for example "image/png".');
  }

  if (typeof cloudPath !== 'string' || cloudPath.trim().length === 0) {
    throw new TypeError('cloudPath must be a non-empty string.');
  }

  if (!auth || typeof auth !== 'object') {
    throw new TypeError('auth options must be provided.');
  }

  const { cloudName, apiKey, apiSecret } = auth;

  if (typeof cloudName !== 'string' || cloudName.trim().length === 0) {
    throw new TypeError('auth.cloudName must be a non-empty string.');
  }

  if (typeof apiKey !== 'string' || apiKey.trim().length === 0) {
    throw new TypeError('auth.apiKey must be a non-empty string.');
  }

  if (typeof apiSecret !== 'string' || apiSecret.trim().length === 0) {
    throw new TypeError('auth.apiSecret must be a non-empty string.');
  }

  cloudinary.config({
    cloud_name: cloudName,
    api_key: apiKey,
    api_secret: apiSecret,
  });

  const normalizedPath = cloudPath.replace(/\\/g, '/').replace(/^\//, '');
  const extension = path.extname(normalizedPath);
  const resourceType = resolveResourceType(mimeType);

  if (resourceType === 'raw' && !extension) {
    throw new TypeError('cloudPath must include a file extension for this mimeType, for example "folder/document.pdf".');
  }

  const publicId = resourceType === 'raw' || !extension
    ? normalizedPath
    : normalizedPath.slice(0, -extension.length);

  const uploadPromise = new Promise<CloudinaryUploadResult>((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        resource_type: resourceType,
        public_id: publicId,
        overwrite: false,
      },
      (error, result) => {
        if (error) {
          reject(error);
          return;
        }

        if (!result || typeof result !== 'object' || !('secure_url' in result)) {
          reject(new Error('Cloudinary upload failed or returned an unexpected response.'));
          return;
        }

        const uploadResult = result as CloudinaryUploadResult;

        if (!uploadResult.secure_url) {
          reject(new Error('Cloudinary upload did not return secure_url.'));
          return;
        }

        resolve(uploadResult);
      }
    );

    stream.end(buffer);
  });

  return uploadPromise;
}

async function main() {
  dotenv.config();

  const [filePath, mimeType, cloudPath] = process.argv.slice(2);
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  if (!filePath || !mimeType || !cloudPath || !cloudName || !apiKey || !apiSecret) {
    console.error(
      'Usage: tsx scripts/cloudinary.ts <local-file-path> <mime-type> <cloud-path>\n' +
        'Requires CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET in the environment or a .env file.'
    );
    process.exit(1);
  }

  try {
    const fileBuffer = await fs.readFile(filePath);
    const result = await uploadToCloudinary(fileBuffer, mimeType, cloudPath, {
      cloudName,
      apiKey,
      apiSecret,
    });
    console.log(JSON.stringify(result, null, 2));
  } catch (error) {
    console.error('Cloudinary upload failed:', error);
    process.exit(1);
  }
}

if (fileURLToPath(import.meta.url) === process.argv[1]) {
  await main();
}
