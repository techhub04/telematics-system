const express = require('express')
const app = express();
const routes = require('./routes/userRoutes');
const cors = require('cors');
const connectDB = require('./config/db');

const errorHandler = require('../../common/logging/ts-error-handler');
const notFoundHandler = require('../../common/logging/ts-notfound-handler');


//middilewares setup
app.use(express.json());
app.use(cors());
connectDB();

app.use('/api/user', routes);

// Global uncaughtException handler
process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
    process.exit(1); // Exit the process gracefully
  });
  
  // Global unhandledRejection handler
  process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    process.exit(1); // Exit the process gracefully
  });
//Handle undefined routes
app.use(notFoundHandler);

//Global error handler
app.use(errorHandler);

app.listen(5000, ()=>{
    console.log('User service running on PORT:5000');
});

