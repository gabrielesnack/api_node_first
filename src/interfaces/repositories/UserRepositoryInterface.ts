import IRepository from '../../interfaces/repositories/RepositoryInterface';
import { User as UserModel } from '../../entity/User';

interface IUserRepository extends IRepository<UserModel> {}

export default IUserRepository;