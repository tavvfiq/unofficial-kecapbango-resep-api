import { Request, Response } from 'express';
import services from '../services';
import { ScrapeRecipeDetail } from '../utils/scraper';

const Controller = {
  getRecipes: async (req: Request, res: Response) => {
    try {
      const { page } = req.params;
      const { lists, code } = await services.getRecipes(page);
      res.status(code).send(lists);
    } catch (error) {
      res.status(404).json({ error });
    }
  },
  getDetailRecipe: async (req: Request, res: Response) => {
    try {
      const { q } = req.query;
      const data = await services.getDetailPage(q as string);
      ScrapeRecipeDetail(req, res, data);
    } catch (error) {
      res.status(404).json({ error });
    }
  },
};

export default Controller;
