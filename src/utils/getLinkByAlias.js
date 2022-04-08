export function getLinkByAlias(alias) {
  if (process.env.IS_OFFLINE === 'true') {
    return alias === '/' ? '/front-page' : alias;
  }

  if (alias === '/') {
    return `/index.html`;
  }

  return `/${alias}/index.html`;
}
