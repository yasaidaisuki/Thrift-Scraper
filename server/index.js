const express = require('express');
const dotenv = require('dotenv').config()
const cors = require('cors')
const {mongoose} = require('mongoose')
const app = express();

mongoose.connect(process.env.ATLAS_URI)
.then( () => console.log('database connected'))
.catch( (err) => console.log('database not connected', err))

app.use(express.json())



app.use('/', require('./routes/authRoutes'))

const port = 3000;
app.listen(port, () => 
    console.log('server is running on port 3000')
);