class AppError extends Error {
    constructor(statusCode, message) {
        super(message);

        this.statusCode = statusCode;
        this.status = String(statusCode).startsWith(4) ? 'error' : 'fail';
        this.isOperational = true

        // Error.captureStackTrace(this, this.constructor);
    }
}

const resError = (statusCode, message) => {
    throw new AppError(statusCode, message)
}

const resSuccess = (res, statusCode, msg, data, length) => {
    const json = {
        status: 'success',
        msg,
        result: length,
        data
    };

    if (!length && +length !== 0) delete json.result;

    res.status(statusCode).json(json)
}

exports.resError = resError
exports.resSuccess = resSuccess