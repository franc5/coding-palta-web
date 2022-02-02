export enum LANGS {
  EN = "en",
  ES = "es",
}

export function getLangFromPathname(pathname: string): LANGS {
  const isEs = /^\/es\/|^\/es$/.test(pathname);
  return (isEs) ? LANGS.ES : LANGS.EN;
}

