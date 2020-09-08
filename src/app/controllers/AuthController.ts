import { Request, Response, NextFunction } from 'express';
import {createConnection, getRepository } from "typeorm";
import AuthService from '@app/services/auth';

class AuthController {
    public async login(req: Request, res: Response, next: NextFunction) {
        try {
            const data = await AuthService.authAttempt(req.body);
            res.json({
                error: false,
                data
            });
        } catch (err) {
            next(err);
        }
    }
}

export default new AuthController;