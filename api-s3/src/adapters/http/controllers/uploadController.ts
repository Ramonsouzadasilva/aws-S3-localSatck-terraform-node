import { Request, Response } from 'express';
import { GeneratePresignedUrl } from '../../../domain/use-cases/generatePresignedUrl';

export function uploadController(usecase: GeneratePresignedUrl) {
  return async (req: Request, res: Response): Promise<Response> => {
    try {
      const { filename } = req.body;
      if (!filename)
        return res.status(400).json({ error: 'filename is required' });

      const result = await usecase.execute(filename);
      return res.json(result);
    } catch (error) {
      console.error('[UploadController]', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  };
}
