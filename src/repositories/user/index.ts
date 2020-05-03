import IUserRepository from '../../interfaces/repositories/UserRepositoryInterface';
import { User as UserModel } from '../../entity/User';
import { Connection, createConnection, getRepository } from 'typeorm';

class UserRepository implements IUserRepository {
    public find(params: any) {
        throw new Error("Method not implemented.");
    }
    public get(id: number) {
        throw new Error("Method not implemented.");
    }
    public async create(entity: UserModel) {
        try {
            const connection = await createConnection();
            const user = await getRepository(UserModel, 'default').save(entity);
            connection.close();
            return user;
        } catch (error) {
            throw { message: 'Erro no banco de dados', data: error, status: 400 }
        }
    }
    public update(entity: UserModel) {
        throw new Error("Method not implemented.");
    }
    public delete(entity: UserModel) {
        throw new Error("Method not implemented.");
    }
    
}

export default new UserRepository;