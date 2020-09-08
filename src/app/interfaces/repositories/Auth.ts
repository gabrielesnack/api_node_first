import IRepository from '@app/interfaces/repositories/BaseRepository';
import { User as UserModel } from '@database/models/User';

interface IAuthRepository extends IRepository<UserModel> {}

export default IAuthRepository;