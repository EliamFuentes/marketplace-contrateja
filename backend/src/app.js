import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./docs/swagger.js";
import routes from "./routes/index.js";
import "dotenv/config";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/api", routes);

app.get("/health", (req, res) => {
    res.status(200).json({ status: "OK" });
});

export default app;