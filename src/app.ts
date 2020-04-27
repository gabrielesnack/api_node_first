import express from 'express';
import cors from 'cors';
import "reflect-metadata";

import routes from './routes/';
class App {
    public express: express.Application;

    public constructor() {
        this.express = express();
        this.middlewares();
        this.database();
        this.routes();

    }

    private middlewares(): void {
        this.express.use(express.json());
        this.express.use(cors());
    }

    private database(): void {

    }

    private routes(): void {
        // console.log(routes);
        this.express.use(routes);
    }

}

export default  new App().express