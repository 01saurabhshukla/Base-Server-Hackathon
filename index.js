import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import routes from "./routes/dustbinRoutes.js";
const port = 8000;

const app = express();

app.use(cors());

app.use("/api/v1", routes);

export default app;

mongoose
  .connect("mongodb+srv://admin:admin@cluster0.cmcgnwy.mongodb.net/IOT", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

app.use("/api/v1", routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
