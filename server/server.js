const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db")

//middleware

app.use(cors());
app.use(express.json());

//routes

app.use("/createAccount", require("./routes/createAccount"));
app.use("/login", require("./routes/loginRoute"));
app.use("/verify", require("./routes/authRoute"));
app.use("/dashboard", require("./routes/dashboard"));
// get items
app.use("/getFemaleItems", require("./routes/getFemaleItems"));
app.use("/getMaleItems", require("./routes/getMaleItems"));
// fav items
app.use("/add_fav_male", require("./routes/maleFavRoute"));
app.use("/add_fav_female", require("./routes/femaleFavRoute"));
//ssearch bar
app.use("/searchItems", require("./routes/searchItems"));

app.listen(5000, () => {
  console.log(`Server is starting on port 5000`);
});