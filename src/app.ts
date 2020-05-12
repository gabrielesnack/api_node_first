import express from 'express';
import cors from 'cors';
import "reflect-metadata";
import {createConnection} from 'typeorm'

import Routes from './app/routes/';
import {consoleColors} from './utils/colors';

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
        createConnection().catch(err => {
            console.error(consoleColors.fg.Red,'Connection with database has failed', consoleColors.Reset)
        });
    }

    private routes(): void {
        this.express.use(Routes);
    }

}

export default  new App().express