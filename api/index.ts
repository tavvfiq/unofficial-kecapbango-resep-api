import express from 'express';
import RootRouter from './route';
import cors from 'cors';

/**
 * Express server application class.
 * @description Will later contain the routing system.
 */
const app = express();

// make server app handle any route starting with '/api'
app.use('/', RootRouter);

app.use(cors());

const port = process.env.port || 3000;

app.listen(port, () => {
  try {
    console.log(`Running on ${port} without you 😥`);
  } catch (error) {
    throw error;
  }
});
