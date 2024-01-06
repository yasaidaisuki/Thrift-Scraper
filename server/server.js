const express = require('express');
const app = express();
const cors = require('cors');
const pool = require("./db")


// middlleware
app.use(cors());
app.use(express.json());

// routes // 
app.use("/auth", require("./routes/registerUsers"));



const PORT = process.env.PORT || 3001;
app.listen(PORT, ()=> console.log(`server is running on port ${PORT}`));

