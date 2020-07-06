//Lib
const express = require('express');
const cors = require('cors');
const mongoose =  require('mongoose');
const keys = require('./config/getdbKey');
require('dotenv').config();

//Express
const app = express();
app.use(express.json());

//Model Routers
const exercisesRouter = require('./routes/exercisesRouter');
const usersRouter = require('./routes/usersRouter');
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

//Db connection
mongoose.connect(keys.adminURI, { useNewUrlParser: true,useCreateIndex: true,useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => console.log('Database Connected'));
    
//Initialize Port
const port = process.env.PORT || 5000;
app.listen(port,
     () => console.log
     (`Server running on port ${port}`))