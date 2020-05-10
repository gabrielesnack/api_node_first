import IUserRepository from '../../../app/interfaces/repositories/UserRepositoryInterface';
import CustomError from '../../../app/exceptions/CustomError';
import { User } from '../../models/User';
import { Connection, createConnection, getRepository } from 'typeorm';

class UserRepository implements IUserRepository {
    public find(params: any) {
        throw new Error("Method not implemented.");
    }
    public get(id: number) {
        throw new Error("Method not implemented.");
    }
    public async create(entity: User) {
        try {
            const connection = await createConnection();
            const user = await getRepository(User, 'default').save(entity);
            connection.close();
            return user;
        } catch (error) {
            throw new CustomError('Erro no banco de dados', error, 500);
        }
    }
    public update(entity: User) {
        throw new Error("Method not implemented.");
    }
    public delete(entity: User) {
        throw new Error("Method not implemented.");
    }
    
}

export default new UserRepository;