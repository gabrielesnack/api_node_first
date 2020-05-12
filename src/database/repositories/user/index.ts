import IUserRepository from '../../../app/interfaces/repositories/UserRepositoryInterface';
import { User } from '../../models/User';
import { getRepository } from 'typeorm';
import DatabaseError from '../../../app/exceptions/database/DatabaseError';

class UserRepository implements IUserRepository {
    public find(params: any) {
        throw new Error("Method not implemented.");
    }
    public get(id: number) {
        throw new Error("Method not implemented.");
    }
    public async create(entity: User) {
        try {
            const user = await getRepository(User).save(entity);
            return user;
        } catch (error) {
            throw new DatabaseError('Erro no banco de dados', error, 500);
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