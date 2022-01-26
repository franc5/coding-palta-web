declare global {
  interface Window {
    M: {
      Sidenav: {
        init(elements: NodeList, options?: any): any;
      },
    },
  }
}

export {}

