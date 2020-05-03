import { Request, Response } from 'express';
import {createConnection, getRepository } from "typeorm";
import UserService from '../services/user';

class UserController {
    public async getUser(req: Request, res: Response) {
        res.end();
    }

    public async createUser(req: Request, res: Response) {
        try {
            const user = await UserService.createNewUser(req.body);
            res.json({
                error: false,
                data: user
            });
        } catch (err) {
            res.status(err.status).json({
                error: true,
                message: err.message,
                data: err.data
            })
        }
    }
}

export default new UserController;