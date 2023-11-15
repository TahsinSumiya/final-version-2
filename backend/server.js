process.env.NODE_OPTIONS = '--max-old-space-size=8192';
const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose")
const app = express();
const bodyParser = require("body-parser");
const router = require('./routers/index')
require("dotenv").config();
const PORT = process.env.PORT || 80;

// const db = require("./db");
// db.connect();


// app.use(bodyParser.json({ limit: "500mb" }));
// app.use(bodyParser.urlencoded({ extended: true, limit: "500mb" }));

app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
  });
  app.use("/api", router);
  app.use("/images", express.static(path.join("../backend/images")));  
app.use(express.static(path.join(__dirname, "/../frontend/build")));

app.get("*", (req, res) => {
    try {
      res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
    } catch (e) {
      res.send("Welcome to stackoverflow clone");
    }
  });







mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));






