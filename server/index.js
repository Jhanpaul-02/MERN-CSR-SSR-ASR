const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
require("./db");
const dataRouter = require("./routes/index");
const port = 5000;

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"], // allow frontend origin
    credentials: true,
  })
);

app.use("/api", dataRouter);

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
