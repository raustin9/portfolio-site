declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGODB_URI: string // the URI of the mongodb instance to connect to
    }
  }

  interface TitleBarItem {
    page: string;
    route: string;
  }
}

export {}