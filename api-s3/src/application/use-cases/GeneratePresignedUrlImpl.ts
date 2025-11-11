import { StorageRepository } from '../../domain/repositories/StorageRepository';
import { GeneratePresignedUrl } from '../../domain/use-cases/generatePresignedUrl';

export class GeneratePresignedUrlImpl implements GeneratePresignedUrl {
  constructor(private readonly storageRepository: StorageRepository) {}

  async execute(filename: string) {
    return await this.storageRepository.generatePresignedUrl(filename);
  }
}
