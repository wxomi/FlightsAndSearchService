const express = require("express");

const { PORT } = require("./config/serverConfig");

const createAndStartServer = async () => {
  //create the express direct
  const app = express();
  app.listen(PORT, () => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    console.log(`Server Started Successfully at ${PORT} .`);
  });
};

createAndStartServer();
