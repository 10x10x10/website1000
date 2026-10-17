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
