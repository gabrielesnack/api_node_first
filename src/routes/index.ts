import { Router } from 'express';
import UsersRoutes from './UsersRoutes';
import HandleFinallyError from '../middlewares/HandleFinallyError';

class Routes {
    public routes: Router;

    public constructor() {
        this.routes = Router();
        this.create();
    }

    private create() : void {
        this.routes.use('/users', UsersRoutes, HandleFinallyError.handle);
    }

}

export default new Routes().routes