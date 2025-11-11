export interface IS3Port {
  getPresignedUploadUrl(
    key: string,
    expiresInSeconds?: number
  ): Promise<string>;
}
