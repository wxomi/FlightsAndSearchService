const express = require("express");

const { PORT } = require("./config/serverConfig");
const ApiRoutes = require("./routes/index");

const setupAndStartServer = async () => {
  //create the express direct
  const app = express();
  app.listen(PORT, async () => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use("/api", ApiRoutes);
    console.log(`Server Started Successfully at ${PORT} .`);
  });
};

setupAndStartServer();
