class CustomError extends Error {
    public resume: string;
    public data: any;
    public httpStatusCode: number;
    public date: Date;

    constructor(resume: string, data: any, httpStatusCode = 500, ...params: any) {
        super(...params)

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, CustomError)
        }

        this.name = 'CustomError'
        this.resume = resume;
        this.data = data;
        this.httpStatusCode = httpStatusCode;
        this.date = new Date()
    }
}

export default CustomError;