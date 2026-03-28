import express from "express";
import cors from "cors";
import { RegisterRouter}from "./routes/AccountApplicationFormController.js";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", RegisterRouter);
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});