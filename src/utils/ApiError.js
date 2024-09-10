export class ApiError extends Error {
  statusCode;
  constructor(message, status) {
    super(message);
    this.message = message;
    this.statusCode = status
  }
}
