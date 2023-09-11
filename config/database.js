//importing required packages
const mongoose = require("mongoose");

// Connection to mongoDB database
mongoose.connect("mongodb+srv://devsherawatmohit:mohit987654321@ers-db.xskblgx.mongodb.net/?retryWrites=true&w=majority"); 


const db = mongoose.connection; // "db" store the connection

// checking the connection
db.on("error", console.error.bind(console, "connection error:")); // printing error(if any)
db.once("open", function () {
  console.log("Database connection is Established");  // printing message if connection established successfully
});

// exporting the connection
module.exports = db;
