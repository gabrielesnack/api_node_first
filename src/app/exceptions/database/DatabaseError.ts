class DatabaseError extends Error {
    public data: any;
    public httpStatusCode: number;
    public date: Date;

    constructor(message: string, error: any, httpStatusCode = 500, ...params: any) {
        super(...params)

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, DatabaseError)
        }

        this.name = 'DatabaseError'
        this.data = error;
        this.message = message;
        this.httpStatusCode = httpStatusCode;
        this.date = new Date()
    }
}

export default DatabaseError;