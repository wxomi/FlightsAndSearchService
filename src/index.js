const express = require("express");

const { PORT } = require("./config/serverConfig");
const db = require("./models/index");
const ApiRoutes = require("./routes/index");

const setupAndStartServer = async () => {
  //create the express direct
  const app = express();
  app.listen(PORT, async () => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use("/api", ApiRoutes);
    if (process.env.DB_SYNC) {
      db.sequelize.sync({ alter: true }); //synchronize all models
    }
    // const city = await City.findOne({
    //   where: {
    //     id: 15,
    //   },
    // });
    //getAirport func only works after synchronizing the db
    // const airports = await city.getAirports();
    console.log(`Server Started Successfully at ${PORT} .`);
  });
};

setupAndStartServer();
