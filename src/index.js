const express = require("express");

const { PORT } = require("./config/serverConfig");
const CityRepository = require("./repository/city-repository");

const setupAndStartServer = async () => {
  //create the express direct
  const app = express();
  app.listen(PORT, async () => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    console.log(`Server Started Successfully at ${PORT} .`);
  });
};

setupAndStartServer();
