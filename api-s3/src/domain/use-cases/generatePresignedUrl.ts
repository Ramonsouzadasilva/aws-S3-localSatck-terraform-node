export interface GeneratePresignedUrl {
  execute(filename: string): Promise<{ url: string; key: string }>;
}
