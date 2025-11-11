import { S3Client } from '@aws-sdk/client-s3';
import { GeneratePresignedUrlImpl } from '../../application/use-cases/GeneratePresignedUrlImpl';
import { S3StorageRepository } from '../../infra/aws/S3StorageRepository';
import { GetFileListImpl } from '../../application/use-cases/GetFileListImpl';
import { GenerateDownloadUrlImpl } from '../../application/use-cases/GenerateDownloadUrlImpl';

export function makeGeneratePresignedUrl() {
  const s3 = new S3Client({
    region: 'us-east-1',
    endpoint: 'http://localhost:4566',
    forcePathStyle: true,
    credentials: {
      accessKeyId: 'test',
      secretAccessKey: 'test',
    },
  });

  const bucketName = process.env.S3_BUCKET || 'upload-bucket';

  const repository = new S3StorageRepository(s3, bucketName);
  return new GeneratePresignedUrlImpl(repository);
}

export function makeGetFileList() {
  const s3 = new S3Client({
    region: 'us-east-1',
    endpoint: 'http://localhost:4566',
    forcePathStyle: true,
    credentials: {
      accessKeyId: 'test',
      secretAccessKey: 'test',
    },
  });
  const bucketName = process.env.S3_BUCKET || 'upload-bucket';
  return new GetFileListImpl(new S3StorageRepository(s3, bucketName));
}

export function makeGenerateDownloadUrl() {
  // const s3 = new S3Client({
  //   region: 'us-east-1',
  //   endpoint: 'http://localhost:4566',
  //   forcePathStyle: true,
  //   credentials: {
  //     accessKeyId: 'test',
  //     secretAccessKey: 'test',
  //   },
  // });

  const s3 = new S3Client({
    region: process.env.AWS_DEFAULT_REGION || 'us-east-1',
    endpoint: process.env.LOCALSTACK_ENDPOINT || 'http://localhost:4566',
    forcePathStyle: true,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID || 'test',
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || 'test',
    },
  });

  const bucketName = process.env.S3_BUCKET || 'upload-bucket';
  return new GenerateDownloadUrlImpl(new S3StorageRepository(s3, bucketName));
}
