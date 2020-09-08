import IAuthRepository from '@app/interfaces/repositories/Auth';
import { User } from '@database/models/User';
import { getRepository } from 'typeorm';
import DatabaseError from '@app/exceptions/database/DatabaseError';

class AuthRepository implements IAuthRepository {
    public async find(params: any) {
        try {
            const user = await getRepository(User).find(params);
            
            return user;
        } catch (error) {
            throw new DatabaseError('Erro no banco de dados', error, 500);
        }
    }
    public async get(params: any) {
        try {
            const user = await getRepository(User).findOne(params);
            
            return user;
        } catch (error) {
            throw new DatabaseError('Erro no banco de dados', error, 500);
        }
    }
    public async create(entity: User) {
        throw new Error("Method not implemented.");
    }
    public update(entity: User) {
        throw new Error("Method not implemented.");
    }
    public delete(entity: User) {
        throw new Error("Method not implemented.");
    }
    
}

export default new AuthRepository;