import express from 'express';
import RootRouter from './api/route';
import cors from 'cors';

/**
 * Express server application class.
 * @description Will later contain the routing system.
 */
class Server {
  public app = express();
  public router = RootRouter;
}

// initialize server app
const server = new Server();

// make server app handle any route starting with '/api'
server.app.use('/', server.router);

server.app.use(cors());

const port = process.env.port || 3000;

server.app.listen(port, () => {
  try {
    console.log(`Running on ${port} without you 😥`);
  } catch (error) {
    throw error;
  }
});
