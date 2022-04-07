export function getLinkByAlias(alias) {
  if (process.env.IS_OFFLINE) {
    return alias;
  }

  return `/${alias}/index.html`;
}
