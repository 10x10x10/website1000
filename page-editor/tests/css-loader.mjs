// Match Vite's single React instance when shared source resolves from the repo root.
export function resolve(specifier, context, nextResolve) {
  if (specifier === 'react') {
    return nextResolve(new URL('../node_modules/react/index.js', import.meta.url).href, context);
  }
  return nextResolve(specifier, context);
}

// Node component tests do not render CSS; preserve class names for assertions.
export function load(url, context, nextLoad) {
  if (url.endsWith('.module.css')) {
    return {
      format: 'module',
      source: 'export default new Proxy({}, { get: (_, key) => key });',
      shortCircuit: true,
    };
  }
  return nextLoad(url, context);
}
