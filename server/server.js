const express = require('express');
const app = express();
const cors = require('cors');
const pool = require("./db")

app.use(cors());
app.use(express.json());

// signup
//const registerRoute = require("./routes/registerUsers")
app.get("/registerusers", (req, res) => {
    res.status(404).json({
        status: "sucess",
        email: "123@gmail.com"
    });
})


const PORT = process.env.PORT || 3001;
app.listen(PORT, ()=> console.log(`server is running on port ${PORT}`));

