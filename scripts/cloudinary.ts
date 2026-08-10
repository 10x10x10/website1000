import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PassThrough } from 'node:stream';
import { v2 as cloudinary } from 'cloudinary';

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

export async function uploadToCloudinary(
  buffer: Buffer,
  mimeType: string,
  cloudPath: string,
  auth: CloudinaryAuthOptions
): Promise<CloudinaryUploadResult> {
  if (!Buffer.isBuffer(buffer)) {
    throw new TypeError('file must be a Buffer.');
  }

  if (typeof mimeType !== 'string' || mimeType.trim().length === 0) {
    throw new TypeError('mimeType must be a non-empty string.');
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

  if (!extension) {
    throw new TypeError('cloudPath must include a file extension, for example "folder/image.png".');
  }

  const uploadPromise = new Promise<CloudinaryUploadResult>((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        resource_type: 'auto',
        public_id: normalizedPath,
        overwrite: false,
        content_type: mimeType,
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

    const passthrough = new PassThrough();
    passthrough.end(buffer);
    passthrough.pipe(stream);
  });

  return uploadPromise;
}

async function main() {
  const [filePath, mimeType, cloudPath, cloudName, apiKey, apiSecret] = process.argv.slice(2);

  if (!filePath || !mimeType || !cloudPath || !cloudName || !apiKey || !apiSecret) {
    console.error('Usage: tsx scripts/cloudinary.ts <local-file-path> <mime-type> <cloud-path> <cloud-name> <api-key> <api-secret>');
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
