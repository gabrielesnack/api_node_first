import { Request, Response } from 'express';
import {createConnection, getRepository } from "typeorm";
import { User } from "../entity/User";

class UserController {
    public async getUser(req: Request, res: Response) {
        try {
            const connection = await createConnection();
            const user = await getRepository(User, 'default').findOne(req.params);
            connection.close();
            res.send(user);
        } catch (error) {
            res.send('error')
        }
    }

    public createUser(req: Request, res: Response) {
        createConnection().then(async connection => {
            const user = new User;
            user.name = "Gabriel";
            user.email = "gabriel@email.com";
            user.password = "123123";
            user.gender = 1;
            user.avatar_url = "https://blog.sage.com.br/wp-content/uploads/2018/06/o-que-e-sla-1280x720.jpg";
            await connection.manager.save(user);
            res.send(user);
        });
    }
}

export default new UserController;