import { Request, Response } from 'express';
import services from '../services';
import { ScrapeRecipeDetail } from '../utils/scraper';

const Controller = {
  getRecipes: async (req: Request, res: Response): Promise<void> => {
    try {
      const { page } = req.params;
      const data = await services.getRecipes(page);
      res.status(data.code).send({ ...data });
    } catch (error) {
      res.status(500).json({ code: 500, error });
    }
  },
  getDetailRecipe: async (req: Request, res: Response): Promise<void> => {
    try {
      const { q } = req.query;
      const html = await services.getDetailPage(q as string);
      const response = ScrapeRecipeDetail(html);
      res.status(200).send({ ...response });
    } catch (error) {
      res.status(500).json({ code: 500, error });
    }
  },
  getRecipeByTage: async (req: Request, res: Response): Promise<void> => {
    try {
      const { tag } = req.params;
      const { page } = req.query;
      const data = await services.getRecipeByTag(tag, page as string);
      res.status(data.code).send({ ...data });
    } catch (error) {
      res.status(500).json({ code: 500, error });
    }
  },
};

export default Controller;
