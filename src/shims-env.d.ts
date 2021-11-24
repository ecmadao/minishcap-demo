interface ImportMetaEnv {
    readonly VITE_API: string
    readonly VITE_LINK_TTL_IN_SECOND: string
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv
  }