import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"

dotenv.config()
const MongoClient = mongodb.MongoClient;

// if doesnt get process.env.PORT then 3000
const port = process.env.PORT || 3000;

// connecting to db
MongoClient.connect(
  process.env.RESTREVIEWS_DB_URI, 
  {
    // how many ppl can access
    poolSize: 50,
    // how long wait until exit
    waitQueueTimeoutMS: 2500,
    useNewUrlParse: true
  }
  // catch error
  .catch(err => {
    console.error(err.stack);
    process.exit;
  })
  .then(async client => {
    app.listen(port, () => {
      console.log('listening on port ${port}');
    })
  })
)