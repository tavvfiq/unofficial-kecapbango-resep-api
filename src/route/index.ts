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
          'visit link on bellow for documentation about masak apa hari ini 👇',
        documentation:
          'https://github.com/tomorisakura/unofficial-masakapahariini-api',
      });
    });

    this._router.get('/api', (req, res) => {
      res.send({
        method: req.method,
        message: 'Hello there 🌹',
        status: 'On Progress 🚀',
        lets_connected: {
          github: 'https://github.com/tomorisakura',
          dribbble: 'https://dribbble.com/grevimsx',
          deviantart: 'https://deviantart.com/hakureix',
        },
      });
    });

    this._router.get('/api/recipes/:page', Controller.getRecipes);
    this._router.get('/api/recipe/', Controller.getDetailRecipe);
  }
}

export default new RootRouter().router;
