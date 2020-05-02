import create from './create';

class UserService implements BaseService {
    constructor() {

    }
    
    find(params: any): void {
        throw new Error("Method not implemented.");
    }
    get(id: number): void {
        throw new Error("Method not implemented.");
    }
    create(data: any): void {
        const createUser = new create;
        createUser.exec();
    }
    update(id: number, data: any): void {
        throw new Error("Method not implemented.");
    }
    patch(id: number, data: any): void {
        throw new Error("Method not implemented.");
    }
    delete(id: number): void {
        throw new Error("Method not implemented.");
    }
}