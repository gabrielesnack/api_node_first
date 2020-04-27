import { Router } from 'express';

export abstract class baseRoutes {
    
    public routes = Router();

    protected abstract create() : void ;

}

