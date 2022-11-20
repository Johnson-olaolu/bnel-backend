export class ApplicationError extends Error {
  statusCode: number;
  constructor(message: string, status: number) {
    super();

    Error.captureStackTrace(this, this.constructor);

    this.name = this.constructor.name;

    this.message = message || "Something went wrong. Please try again.";

    this.statusCode = status || 500;
  }
}

export class NotFoundError extends ApplicationError {
  constructor(message: any) {
    super(message || "No User found.", 404);
  }
}
export class UnauthorizedError extends ApplicationError {
  constructor(message: any) {
    super(message || "Access Denied.", 401);
  }
}
