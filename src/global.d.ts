declare global {
  interface Window {
    M: {
      Sidenav: {
        init(elements: NodeList, options?: any): any;
      },
      Parallax: {
        init(elements: NodeList, options?: any): any;
      },
      toast({ html: string }): void,
    },
  }
}

export {}

