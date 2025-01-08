const TSErrorHandler = (err,req,res,next)=>{
     // Set default values for status code and message
    const statusCode = err.statusCode || 500;
    const message = err.message || "Something went wrong";

    // Log detailed error in development
    // if (process.env.NODE_ENV === 'development') {
    //     console.error('Error Stack:', err.stack);
    // }

    // // Log critical errors to an external service in production (example)
    // if (process.env.NODE_ENV === 'production') {
    //     // For example: send logs to a service like Sentry or Logstash
    //     // logErrorToService(err);
    // }

    res.status(statusCode).json({
        success: false,
        message,
        ...(err.details && { details: err.details }),
    })
}

module.exports = TSErrorHandler;