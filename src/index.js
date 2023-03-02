const express = require("express");

const PORT = require("./config/serverConfig");

const createAndStartServer = async () => {
  //create the express direct
  const app = express();
  const PORT = process.env.PORT;
  app.listen(PORT, () => {
    console.log(`Server Started Successfully at ${PORT} .`);
  });
};

createAndStartServer();
