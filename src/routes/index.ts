import { Router } from 'express';
import usersRoutes from './usersRoutes';

class Routes {
    public routes: Router;

    public constructor() {
        this.routes = Router();
        this.create();
    }

    private create() : void {
        this.routes.use('/users', usersRoutes);
    }

}

export default new Routes().routes