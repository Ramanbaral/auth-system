class ApiError extends Error {
  statusCode: number;
  message: string;
  errors: any;
  success: boolean = false;
  constructor(
    statusCode: number,
    message: string,
    errors?: any,
    stack?: string,
  ) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
export default ApiError;
