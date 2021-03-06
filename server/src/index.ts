require('dotenv').config({path: '.env'});
import express from "express";
import cors from "cors";
import db from "./DBModels/index";
import config from "./config/index";

import teacher from "./routes/teacher"

db.sequelize.sync();

const app = express();

app.listen(config.port, () => {
    console.log(`Server started at http://localhost:${config.port}`);
})

app.use(express.json());
app.use(cors());

app.use("/api/teachers", teacher);

app.use(function (req, res) {
    res.status(404).end("404. Ooops. There is nothing here!");
});

export default app;
