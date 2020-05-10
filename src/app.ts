import express from 'express';
import cors from 'cors';
import "reflect-metadata";

import Routes from './app/routes/';
import HandleFinallyError from './app/middlewares/HandleFinallyError';

class App {
    public express: express.Application;

    public constructor() {
        this.express = express();
        this.middlewares();
        this.database();
        this.routes();
        this.express.use(HandleFinallyError.handle);
    }

    private middlewares(): void {
        this.express.use(express.json());
        this.express.use(cors());
    }

    private database(): void {

    }

    private routes(): void {
        this.express.use(Routes);
    }

}

export default  new App().express