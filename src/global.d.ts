declare global {
  interface Window {
    M: {
      Sidenav: {
        init(elements: NodeList, options?: any): any;
        getInstance(elements: Node): any;
      },
      Parallax: {
        init(elements: NodeList, options?: any): any;
      },
      toast({ html: string }): void,
    },
  }
}

export {}

