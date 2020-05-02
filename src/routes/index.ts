import { Router } from 'express';
import UsersRoutes from './UsersRoutes';

class Routes {
    public routes: Router;

    public constructor() {
        this.routes = Router();
        this.create();
    }

    private create() : void {
        this.routes.use('/users', UsersRoutes);
    }

}

export default new Routes().routes