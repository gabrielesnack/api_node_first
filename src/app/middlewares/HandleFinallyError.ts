import { IMiddleware } from '../interfaces/middlewares';
import { Request, Response, NextFunction } from "express";

class HandleFinallyError implements IMiddleware {
    handle(error: any, req: Request, res: Response, next: NextFunction) : any {
        res.status(error.httpStatusCode).json({
            error: true,
            message: error.resume,
            data: error.data
        })
    }
}

export default new HandleFinallyError;