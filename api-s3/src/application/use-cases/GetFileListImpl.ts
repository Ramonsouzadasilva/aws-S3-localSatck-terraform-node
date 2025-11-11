import { S3StorageRepository } from '../../infra/aws/S3StorageRepository';

export class GetFileListImpl {
  constructor(private repo: S3StorageRepository) {}

  async execute() {
    return await this.repo.listObjects();
  }
}
