class CustomError extends Error {
    public data: any;
    public httpStatusCode: number;
    public date: Date;

    constructor(message: string, error: any, httpStatusCode = 500, ...params: any) {
        super(...params)

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, CustomError)
        }

        this.name = 'CustomError'
        this.message = message;
        this.data = error;
        this.httpStatusCode = httpStatusCode;
        this.date = new Date()
    }
}

export default CustomError;