export interface StorageRepository {
  generatePresignedUrl(filename: string): Promise<{ url: string; key: string }>;
}
