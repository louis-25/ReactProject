require("dotenv").config();
const express = require('express');
const cors = require("cors");
const mongoose = require("mongoose");
const {imageRouter} =require("./routes/imageRouter")

const app = express();
const { MONGO_URI, PORT } = process.env

mongoose
  .connect(MONGO_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  .then(() => { // MongoDB 연결됨
    console.log("MongoDB Connected.")
    app.use(cors())
    app.use("/uploads", express.static("uploads")) // 외부에서 uploads폴더에 접근가능
    app.use("/images", imageRouter)
    app.listen(PORT, () => console.log(PORT + "번 포트 listen 중~"))
  })
  .catch((e) => { console.log(e) })
