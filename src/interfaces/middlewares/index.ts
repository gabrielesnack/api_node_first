import { Request, Response, NextFunction } from "express";

export interface IMiddleware {
    handle(error: any, req: Request, res:Response, next: NextFunction): any;
}