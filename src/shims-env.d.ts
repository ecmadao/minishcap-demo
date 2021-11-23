interface ImportMetaEnv extends Readonly<Record<string, string>> {
    readonly VITE_API: string
    readonly VITE_LINK_TTL_IN_SECOND: number
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv
  }