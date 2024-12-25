const express = require('express')
const app = express();
const routes = require('./routes/userRoutes');
const cors = require('cors');
const connectDB = require('./config/db');

//middilewares setup
app.use(express.json());
app.use(cors());
connectDB();

app.use('/api/user', routes);

app.listen(5000, ()=>{
    console.log('User service running on PORT:5000');
});

