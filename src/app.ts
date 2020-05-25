import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import session from 'express-session';
import 'reflect-metadata';
import { createConnection } from 'typeorm'

import Routes from './routes';
import { consoleColors } from './utils/colors';

class App {
    public express: express.Application;

    public constructor() {
        this.env();
        this.express = express();
        this.middlewares();
        this.database();
        this.routes();
    }

    private env() {
        const getEnvName = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
        const env = require(`./config/${getEnvName}.env.js`)
        process.env = { ...process.env, ...env }
    }

    private middlewares(): void {
        this.express.use(express.json());
        this.express.use(cors());
        this.express.use(helmet());
        this.express.use(session(this.configCookie()))
    }

    private database(): void {
        createConnection().catch(err => {
            console.error(consoleColors.fg.Red,'Connection with database has failed', consoleColors.Reset)
        });
    }

    private routes(): void {
        this.express.use(Routes);
    }

    private configCookie() {
      return {
        secret: process.env.COOKIE_SECRET || 'fallback_cookie_secret_key_here',
        cookie: { maxAge: 60000 }, 
        resave: false, 
        saveUninitialized: false
      }
    }

}

export default  new App().express