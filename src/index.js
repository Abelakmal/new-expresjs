import express from "express";
import testRouters from "./routers/testRouters.js";
import handlerApiError from "./middleware/handlerApiError.js";
import handleNotFound from "./middleware/handleNotFound.js";
import sequelize from "./utils/database.js";
import { PORT } from "./utils/constant.js";

const app = express();
app.use(express.json());

app.use("/", testRouters);

app.use(handleNotFound);
app.use(handlerApiError);

app.use(express.urlencoded({ extended: true }));

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected...");
    await sequelize.sync();
    console.log("Database synchronized...");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

if (process.env.NODE_ENV !== "test") {
  startServer();
}

export default app;
