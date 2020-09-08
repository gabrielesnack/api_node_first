import { Request, Response, NextFunction } from 'express';
import {createConnection, getRepository } from "typeorm";
import UserService from '@app/services/user';

class UserController {
    public async getUser(req: Request, res: Response) {
        res.end();
    }

    public async createUser(req: Request, res: Response, next: NextFunction) {
        try {
            const user = await UserService.createNewUser(req.body);
            res.json({
                error: false,
                data: user
            });
        } catch (err) {
            next(err);
        }
    }
}

export default new UserController;