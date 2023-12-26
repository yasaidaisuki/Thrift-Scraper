const express = require('express');
const dotenv = require('dotenv').config()
const cors = require('cors');
const {mongoose} = require('mongoose')

app.use(cors());

// connecting to Mongo
mongoose.connect(process.env.MONGODB_URI)
.then(()=> console.log("database connected"))
.catch((error) => {
    console.log("database not connected", error)
})

// Routes


const app = express();

const PORT = process.env.PORT || 3001;
app.listen(PORT, ()=> console.log(`server is running on port ${PORT}`));

