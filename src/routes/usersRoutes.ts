import { baseRoutes } from './baseRoutes';
import userController from '../controllers/userController';

class userRoutes extends baseRoutes {
    public constructor() {
        super();
        this.create();
    }

    protected create() {
        this.routes.get('/:id', userController.getUser);
    }
}

export default new userRoutes().routes;