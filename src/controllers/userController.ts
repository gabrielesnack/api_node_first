import { Request, Response } from 'express';

class userController {
    constructor() {
        
    }

    public getUser(req: Request, res: Response) {
        res.send(req.params);
    }
}

export default new userController;