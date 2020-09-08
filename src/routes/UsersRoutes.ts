import { BaseRoutes } from './BaseRoutes';
import UserController from '@app/controllers/userController';

class UserRoutes extends BaseRoutes {
    public constructor() {
        super();
        this.create();
    }

    protected create() {
        this.routes.get('/:id', UserController.getUser);
        this.routes.post('/create', UserController.createUser);
    }
}

export default new UserRoutes().routes;