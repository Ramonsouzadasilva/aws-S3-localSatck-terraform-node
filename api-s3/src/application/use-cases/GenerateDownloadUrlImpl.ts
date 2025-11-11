import { S3StorageRepository } from '../../infra/aws/S3StorageRepository';

export class GenerateDownloadUrlImpl {
  constructor(private repo: S3StorageRepository) {}

  async execute(key: string) {
    return await this.repo.generateDownloadUrl(key);
  }
}
