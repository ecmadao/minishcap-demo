interface ImportMetaEnv extends Readonly<Record<string, string>> {
    readonly VITE_API: string
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv
  }