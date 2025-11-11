import { Request, Response } from 'express';
import { GetFileListImpl } from '../../../application/use-cases/GetFileListImpl';

export function getFilesController(usecase: GetFileListImpl) {
  return async (req: Request, res: Response): Promise<Response> => {
    try {
      const files = await usecase.execute();
      return res.json(files);
    } catch (error) {
      console.error('[GetFilesController]', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  };
}
