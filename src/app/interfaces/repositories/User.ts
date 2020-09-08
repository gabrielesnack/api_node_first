import IRepository from '@app/interfaces/repositories/BaseRepository';
import { User as UserModel } from '@database/models/User';

interface IUserRepository extends IRepository<UserModel> {}

export default IUserRepository;