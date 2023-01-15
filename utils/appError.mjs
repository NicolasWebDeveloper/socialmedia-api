export default class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode || 500;
    this.status = statusCode >= 400 && statusCode <= 500 ? 'error' : 'fail';
    this.timestamp = Date.now();
  }
}
