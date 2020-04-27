import { baseRoutes } from './baseRoutes';

class userRoutes extends baseRoutes {
    public constructor() {
        super();
        this.create();
    }

    protected create() {
        this.routes.get('/:id', (req, res) => {
            res.send(req.params);
        });
    }
}

export default new userRoutes().routes;