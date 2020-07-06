const express = require('express');
const cors = require('cors');
const mongoose =  require('mongoose');
const keys = require('./config/getdbKey');

require('dotenv').config();

const app = express();

app.use(express.json());


mongoose
    .connect(keys.adminURI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    .then(() => console.log('Database Connected'))
    .catch(err => console.log(err));


    
const port = process.env.PORT || 5000;
app.listen(port,
     () => console.log
     (`Server running on port ${port}`))