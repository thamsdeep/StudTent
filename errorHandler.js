class CustomError extends Error {
    constructor(message, statusCode) {
      super(message);
      this.statusCode = statusCode;
    }
  }
  
  const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Server error';
    res.status(statusCode).json({ message });
  };
  
  module.exports = {
    CustomError,
    errorHandler
  };
  