/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GOOGLE_MAP: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}