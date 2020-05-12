import { Router } from 'express';
import UsersRoutes from './UsersRoutes';
import { FinallErrorHandler } from '../app/middlewares';

class Routes {
    public routes: Router;

    public constructor() {
        this.routes = Router();
        this.create();
        this.errorHandler();
    }

    private create() : void {
        this.routes.use('/users', UsersRoutes);
    }

    private errorHandler() {
        this.routes.use(FinallErrorHandler.handle);
    }
}

export default new Routes().routes