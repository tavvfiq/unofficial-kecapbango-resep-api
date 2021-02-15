import { Router } from 'express';
import Controller from '../controller';

class RootRouter {
  private _router = Router();

  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

  /**
   * Connect routes to their matching routers.
   */
  private _configure() {
    this._router.get('/', (req, res) => {
      res.send({
        greet: 'Hello there 👋',
        message:
          'visit link on bellow for documentation about bango.co.id/resep api 👇',
        documentation:
          'https://github.com/tavvfiq/unofficial-kecapbango-resep-api',
      });
    });

    this._router.get('/api', (req, res) => {
      res.send({
        method: req.method,
        message: 'Hello there 🌹',
        status: 'On Progress 🚀',
        lets_connected: {
          github: 'https://github.com/tavvfiq',
        },
      });
    });

    this._router.get('/api/recipes/:page', Controller.getRecipes);
    this._router.get('/api/recipe/', Controller.getDetailRecipe);
  }
}

export default new RootRouter().router;
