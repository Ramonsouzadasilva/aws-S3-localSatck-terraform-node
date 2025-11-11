import { Router } from 'express';
import { uploadController } from '../controllers/uploadController';
import {
  makeGenerateDownloadUrl,
  makeGeneratePresignedUrl,
  makeGetFileList,
} from '../../../main/factories/makeGeneratePresignedUrl';
import { getFilesController } from '../controllers/getFilesController';
import { downloadFileController } from '../controllers/downloadFileController';

const router = Router();

router.post('/presigned', uploadController(makeGeneratePresignedUrl()));

router.get('/files', getFilesController(makeGetFileList()));
router.get(
  '/files/:key/download',
  downloadFileController(makeGenerateDownloadUrl())
);

// router.get('/files', async (req, res) => {
//   const useCase = makeGetFileList();
//   const files = await useCase.execute();
//   return res.json(files);
// });

// router.get('/files/:key/download', async (req, res) => {
//   const { key } = req.params;
//   const useCase = makeGenerateDownloadUrl();
//   const url = await useCase.execute(key);
//   return res.json({ url });
// });

export default router;
