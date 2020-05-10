import IRepository from '../../interfaces/repositories/RepositoryInterface';
import { User as UserModel } from '../../../database/models/User';

interface IUserRepository extends IRepository<UserModel> {}

export default IUserRepository;