import { BaseRoutes } from './BaseRoutes';
import AuthController from '@app/controllers/AuthController';

class AuthRoutes extends BaseRoutes {
    public constructor() {
        super();
        this.create();
    }

    protected create() {
        this.routes.post('/login', AuthController.login);
    }
}

export default new AuthRoutes().routes;