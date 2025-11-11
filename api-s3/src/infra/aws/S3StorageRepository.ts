import {
  S3Client,
  PutObjectCommand,
  ListObjectsV2Command,
  GetObjectCommand,
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { StorageRepository } from '../../domain/repositories/StorageRepository';

export class S3StorageRepository implements StorageRepository {
  constructor(private readonly s3: S3Client, private readonly bucket: string) {}

  async generatePresignedUrl(filename: string) {
    const command = new PutObjectCommand({
      Bucket: this.bucket,
      Key: filename,
    });

    const url = await getSignedUrl(this.s3, command, { expiresIn: 3600 });

    return { url, key: filename };
  }

  async listObjects(): Promise<string[]> {
    const command = new ListObjectsV2Command({
      Bucket: this.bucket,
    });

    const response = await this.s3.send(command);
    return response.Contents?.map((obj) => obj.Key!) || [];
  }

  async generateDownloadUrl(key: string): Promise<string> {
    const command = new GetObjectCommand({
      Bucket: this.bucket,
      Key: key,
    });

    const url = await getSignedUrl(this.s3, command, { expiresIn: 3600 });
    return url;
  }
}
