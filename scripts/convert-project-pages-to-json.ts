import fs from 'fs/promises';
import path from 'path';
import vm from 'vm';

const workspaceRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const pagesDir = path.join(workspaceRoot, 'pages/projects');
const contentDir = path.join(workspaceRoot, 'content/projects');

function extractBalanced(text: string, startIndex: number, openChar: string, closeChar: string) {
  let depth = 0;
  const len = text.length;
  let inString: string | null = null;
  let escaped = false;
  let inTemplateExpression = false;
  for (let i = startIndex; i < len; i += 1) {
    const ch = text[i];
    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (ch === '\\') {
        escaped = true;
      } else if (ch === inString) {
        inString = null;
      } else if (inString === '`' && ch === '$' && text[i + 1] === '{') {
        inTemplateExpression = true;
        depth += 1;
        i += 1;
      }
      continue;
    }
    if (ch === '"' || ch === "'" || ch === '`') {
      inString = ch;
      continue;
    }
    if (ch === '/' && text[i + 1] === '/') {
      i += 2;
      while (i < len && text[i] !== '\n') i += 1;
      continue;
    }
    if (ch === '/' && text[i + 1] === '*') {
      i += 2;
      while (i < len && !(text[i] === '*' && text[i + 1] === '/')) i += 1;
      i += 1;
      continue;
    }
    if (ch === openChar && !inTemplateExpression) {
      depth += 1;
      continue;
    }
    if (ch === closeChar && !inTemplateExpression) {
      depth -= 1;
      if (depth === 0) {
        return text.slice(startIndex, i + 1);
      }
      continue;
    }
    if (inTemplateExpression && ch === '}') {
      inTemplateExpression = false;
      continue;
    }
  }
  throw new Error(`No matching closing '${closeChar}' for '${openChar}' starting at ${startIndex}`);
}

function extractObjectLiteral(source: string, key: string) {
  const regex = new RegExp(`const\\s+${key}\\s*(?::[^=]*)?=\\s*\\{`, 'm');
  const match = source.match(regex);
  if (!match || match.index === undefined) {
    throw new Error(`Unable to find const ${key} object literal`);
  }
  const start = match.index + match[0].lastIndexOf('{');
  return extractBalanced(source, start, '{', '}');
}

function evalJsExpression(expression: string, context: Record<string, unknown> = {}) {
  const safeContext = vm.createContext({ ...context });
  const script = new vm.Script(`(${expression})`, { filename: 'eval-expression.js' });
  return script.runInContext(safeContext);
}

function parseMetadata(source: string) {
  const literal = extractObjectLiteral(source, 'metadata');
  return evalJsExpression(literal);
}

function parseLinkObject(source: string) {
  try {
    const literal = extractObjectLiteral(source, 'link');
    return evalJsExpression(literal, { link: {} });
  } catch {
    return {};
  }
}

function extractReturnBlock(source: string) {
  const returnRegex = /return\s*\(/m;
  const match = source.match(returnRegex);
  if (!match || match.index === undefined) {
    throw new Error('Unable to find return statement');
  }
  const start = match.index + match[0].length;
  return extractBalanced(source, start, '(', ')');
}

function normalizeWhitespace(text: string) {
  return text.replace(/\r\n?/g, '\n');
}

function isWhitespace(ch: string) {
  return ch === ' ' || ch === '\n' || ch === '\t' || ch === '\r';
}

function parseStringLiteral(text: string, start: number) {
  const quote = text[start];
  let i = start + 1;
  let value = '';
  while (i < text.length) {
    const ch = text[i];
    if (ch === '\\') {
      if (i + 1 < text.length) {
        value += text[i + 1];
        i += 2;
        continue;
      }
    }
    if (ch === quote) {
      return { value, end: i + 1 };
    }
    value += ch;
    i += 1;
  }
  throw new Error('Unterminated string literal');
}

function parseIdentifier(text: string, start: number) {
  let i = start;
  while (i < text.length && /[\w$.-]/.test(text[i])) {
    i += 1;
  }
  return { value: text.slice(start, i), end: i };
}

function skipWhitespace(text: string, start: number) {
  let i = start;
  while (i < text.length && isWhitespace(text[i])) i += 1;
  return i;
}

function parseJsExpression(text: string, start: number, linkValues: Record<string, unknown>) {
  let depth = 1;
  let i = start + 1;
  let inString: string | null = null;
  let escaped = false;
  while (i < text.length) {
    const ch = text[i];
    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (ch === '\\') {
        escaped = true;
      } else if (ch === inString) {
        inString = null;
      }
      i += 1;
      continue;
    }
    if (ch === '"' || ch === "'" || ch === '`') {
      inString = ch;
      i += 1;
      continue;
    }
    if (ch === '{') {
      depth += 1;
    } else if (ch === '}') {
      depth -= 1;
      if (depth === 0) {
        const expr = text.slice(start + 1, i).trim();
        const evaluated = evalJsExpression(expr, { link: linkValues, ...linkValues });
        return { value: evaluated, end: i + 1 };
      }
    }
    i += 1;
  }
  throw new Error('Unterminated JSX expression');
}

function parseAttributeValue(text: string, start: number, linkValues: Record<string, unknown>) {
  let i = skipWhitespace(text, start);
  if (text[i] === '"' || text[i] === "'") {
    const parsed = parseStringLiteral(text, i);
    return { value: parsed.value, end: parsed.end };
  }
  if (text[i] === '{') {
    const parsed = parseJsExpression(text, i, linkValues);
    return { value: parsed.value, end: parsed.end };
  }
  const id = parseIdentifier(text, i);
  return { value: id.value, end: id.end };
}

function parseAttributes(text: string, pos: number, linkValues: Record<string, unknown>) {
  const props: Record<string, unknown> = {};
  while (pos < text.length) {
    pos = skipWhitespace(text, pos);
    if (pos >= text.length || text[pos] === '>' || text[pos] === '/' || text[pos] === '?') break;
    const nameStart = pos;
    while (pos < text.length && /[\w$:-]/.test(text[pos])) pos += 1;
    const name = text.slice(nameStart, pos);
    pos = skipWhitespace(text, pos);
    if (text[pos] === '=') {
      pos += 1;
      const parsed = parseAttributeValue(text, pos, linkValues);
      props[name] = parsed.value;
      pos = parsed.end;
    } else {
      props[name] = true;
    }
  }
  return { props, pos };
}

function parseJsxElement(text: string, pos: number, linkValues: Record<string, unknown>): { node: unknown; pos: number } {
  if (text[pos] !== '<') {
    throw new Error(`Expected '<' at position ${pos}`);
  }
  if (text.startsWith('<!--', pos)) {
    const end = text.indexOf('-->', pos + 4);
    if (end === -1) throw new Error('Unterminated JSX comment');
    return { node: null, pos: end + 3 };
  }
  const isClosing = text[pos + 1] === '/';
  if (isClosing) {
    throw new Error(`Unexpected closing tag at ${pos}`);
  }
  let i = pos + 1;
  const nameStart = i;
  while (i < text.length && /[\w$.-]/.test(text[i])) i += 1;
  const tagName = text.slice(nameStart, i);
  const attrs = parseAttributes(text, i, linkValues);
  i = attrs.pos;
  const node: any = { type: tagName };
  if (Object.keys(attrs.props).length) {
    node.props = attrs.props;
  }
  if (text[i] === '/') {
    if (text[i + 1] === '>') {
      return { node, pos: i + 2 };
    }
  }
  if (text[i] !== '>') {
    throw new Error(`Unexpected character '${text[i]}' parsing tag ${tagName} at ${i}`);
  }
  i += 1;
  const children: unknown[] = [];
  while (i < text.length) {
    i = skipWhitespace(text, i);
    if (text.startsWith(`</${tagName}`, i)) {
      const closeStart = text.indexOf('>', i);
      if (closeStart === -1) throw new Error(`Unterminated closing tag for ${tagName}`);
      i = closeStart + 1;
      break;
    }
    if (text[i] === '<') {
      if (text.startsWith('<!--', i)) {
        const end = text.indexOf('-->', i + 4);
        if (end === -1) throw new Error('Unterminated JSX comment');
        i = end + 3;
        continue;
      }
      const child = parseJsxElement(text, i, linkValues);
      children.push(child.node);
      i = child.pos;
      continue;
    }
    let textStart = i;
    while (i < text.length && text[i] !== '<') i += 1;
    const raw = text.slice(textStart, i);
    const decoded = raw.replace(/\s+/g, ' ').trim();
    if (decoded) children.push(decoded);
  }
  if (children.length) {
    node.children = children;
  }
  return { node, pos: i };
}

function parseProjectTree(text: string, linkValues: Record<string, unknown>) {
  text = normalizeWhitespace(text);
  const projectStart = text.indexOf('<Project');
  if (projectStart === -1) {
    throw new Error('<Project> wrapper not found');
  }
  const parsed = parseJsxElement(text, projectStart, linkValues);
  const projectNode = parsed.node as any;
  if (!projectNode || projectNode.type !== 'Project') {
    throw new Error('Top-level Project node not found');
  }
  return projectNode.children ?? [];
}

async function convertFile(filePath: string) {
  const sourceText = await fs.readFile(filePath, 'utf-8');
  const metadata = parseMetadata(sourceText);
  const linkValues = parseLinkObject(sourceText);
  const tree = parseProjectTree(sourceText, linkValues);
  if (!Array.isArray(tree) || tree.length === 0) {
    throw new Error(`No Project children found in ${filePath}`);
  }
  const output = { metadata, tree };
  const fileName = path.basename(filePath, '.tsx') + '.json';
  const outputPath = path.join(contentDir, fileName);
  await fs.writeFile(outputPath, JSON.stringify(output, null, 2) + '\n', 'utf-8');
  return outputPath;
}

async function main() {
  await fs.mkdir(contentDir, { recursive: true });
  const fileNames = await fs.readdir(pagesDir);
  const tsxFiles = fileNames.filter((name) => name.endsWith('.tsx') && !name.startsWith('~'));
  const written: string[] = [];
  for (const fileName of tsxFiles) {
    const filePath = path.join(pagesDir, fileName);
    try {
      const outputPath = await convertFile(filePath);
      written.push(outputPath);
      console.log(`Converted ${fileName} => ${path.relative(workspaceRoot, outputPath)}`);
    } catch (error) {
      console.error(`Failed ${fileName}:`, error instanceof Error ? error.message : String(error));
    }
  }
  console.log(`Converted ${written.length}/${tsxFiles.length} files.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
