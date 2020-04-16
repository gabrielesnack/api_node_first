import express, { Router } from 'express';
import routes from './routes';

const app = express();

routes.map( route => app.use(route) );

app.listen(3000);