import { User } from '../../../database/models/User';
import UserRepository from '../../../database/repositories/user';
import {validate} from "class-validator";

class UserService  {
    constructor() {

    }
    
    public async createNewUser(data: any) {
        const newUser = new User(data);
        
        const verifyUser = await validate(newUser);
        if (verifyUser.length) {
            let error = verifyUser.map(e => {
                return { field: e.property, message: e.constraints}
            })
            throw {message: 'Dados Invalidos', data: error, status: 400};
        }

        return await UserRepository.create(newUser);
    }
}

export default new UserService;