import { Request, Response } from 'express';
import { GenerateDownloadUrlImpl } from '../../../application/use-cases/GenerateDownloadUrlImpl';

export function downloadFileController(usecase: GenerateDownloadUrlImpl) {
  return async (req: Request, res: Response): Promise<Response> => {
    try {
      const { key } = req.params;

      if (!key) return res.status(400).json({ error: 'file key is required' });

      const url = await usecase.execute(key);
      return res.json({ url });
    } catch (error) {
      console.error('[DownloadFileController]', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  };
}
