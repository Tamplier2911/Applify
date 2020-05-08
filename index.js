const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Handle Uncaught Exceptions
process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION", err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: "./.env" });
const app = require("./app");

// DB CONNECTION
const db = process.env.DB.replace("*PASSWORD*", process.env.DB_PASSWORD);
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Conntected Successfully!");
  });

// SERVER
const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log(
    `Server is up and listening for incoming requests at port: ${port}!`
  );
});

// Handle Unhandled Rejections
process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION", err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

// Handle Sigterm Shotdowns
process.on("SIGTERM", () => {
  console.log("SIGTERM RECIEVED. Shutting down...");
  server.close(() => {
    console.log("Process terminated...");
  });
});
