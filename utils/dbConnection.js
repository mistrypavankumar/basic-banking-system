const mongoose = require("mongoose");

const connection = {};

async function dbConnection() {
  //Checking whether it is connected to db
  if (connection.isConnected) {
    return;
  }

  const db = await mongoose.connect(process.env.MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  connection.isConnected = db.connections[0].readyState;

  //consoling to check connection
  console.log(connection.isConnected);
}

export default dbConnection;
