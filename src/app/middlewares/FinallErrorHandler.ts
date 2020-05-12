import { IMiddleware } from '../interfaces/middlewares';
import { Request, Response, NextFunction } from "express";
import {CustomError, DatabaseError } from '../exceptions';

class FinallErrorHandler implements IMiddleware {
    handle(error: any, req: Request, res: Response, next: NextFunction) : any {

        if(error instanceof CustomError) {
            return res.status(error.httpStatusCode).json({
                error: true,
                type: error.name,
                message: error.message,
                data: error.data
            })
        }

        if(error instanceof DatabaseError) {
            return res.status(error.httpStatusCode).json({
                error: true,
                type: error.name,
                message: error.message,
                data: error.data
            })
        }

        return res.status(500).json({
            error: true,
            type: 'Unknown',
            message: 'Unknown',
        })
    }
}

export default new FinallErrorHandler;