import { Router } from 'express';

export abstract class BaseRoutes {
    
    public routes = Router();

    protected abstract create() : void ;

}

