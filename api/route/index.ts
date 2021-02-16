import { Router } from 'express';
import Controller from '../controller';

const router = Router();

router.get('/', (req, res) => {
  res.send({
    greet: 'Hello there 👋',
    message:
      'visit link on bellow for documentation about bango.co.id/resep api 👇',
    documentation: 'https://github.com/tavvfiq/unofficial-kecapbango-resep-api',
  });
});

router.get('/api', (req, res) => {
  res.send({
    method: req.method,
    message: 'Hello there 🌹',
    status: 'On Progress 🚀',
    lets_connected: {
      github: 'https://github.com/tavvfiq',
    },
  });
});

router.get('/api/recipes/:page', Controller.getRecipes);
router.get('/api/recipe/', Controller.getDetailRecipe);

export default router;
