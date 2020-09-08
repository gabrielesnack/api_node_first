import { Router } from 'express';
import UsersRoutes from './UsersRoutes';
import AuthRoutes from './AuthRoutes';
import { FinalErrorHandler } from '@app/middlewares';
import express from 'express';

class Routes {
    public routes: Router;

    public constructor() {
        this.routes = Router();
        this.create();
        this.errorHandler();
    }

    private create() : void {
        this.routes.use('/auth', AuthRoutes)
        this.routes.use('/users', UsersRoutes);
        this.routes.post('/teste', (req, res) => {
            console.log(req.body);
            res.json({
                error: false,
                data: req.body
            })
        })
    }

    private errorHandler() {
        this.routes.use(FinalErrorHandler.handle);
    }
}

export default new Routes().routes