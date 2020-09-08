import { User } from '@database/models/User';
import {validate} from "class-validator";
import { CustomError } from '../../exceptions';
import AuthRepository from '@database/repositories/auth';
import { loginDTO } from '@app/interfaces/services/Auth';
import jwt from 'jsonwebtoken';

class AuthService  {
    constructor() {

    }
    
    public async authAttempt(data: loginDTO) {
        const getUser = await AuthRepository.get({
            where: { email: data.email, password: data.password },
        })

        if(!process.env.AUTH_SECRET) {
            throw new CustomError('Internal error on variables of enviroments', {}, 500);
        }

        if(getUser != null) {
            const token = jwt.sign({ id: getUser.id }, process.env.AUTH_SECRET, {
              expiresIn: 300 // expires in 5min
            });
            return { 
                message: 'Usuário logado com sucesso.',
                token: token 
            };
        }

        throw new CustomError('Unauthorized', {}, 404);
    }
}

export default new AuthService;