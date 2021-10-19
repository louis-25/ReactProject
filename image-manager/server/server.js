require("dotenv").config();
const express = require('express');
const cors = require("cors");
const mongoose = require("mongoose");
const { imageRouter } =require("./routes/imageRouter")
const { userRouter } = require("./routes/userRouter")

const app = express();
const { MONGO_URI, PORT } = process.env
const {authenticate} = require("./middleware/authentication")

mongoose
  .connect(MONGO_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  .then(() => { // MongoDB 연결됨
    console.log("MongoDB Connected.")
    app.use(cors())
    app.use(express.json()) // json데이터 받을 수 있음
    app.use("/uploads", express.static("uploads")) // 외부에서 uploads폴더에 접근가능
    app.use(authenticate)
    app.use("/images", imageRouter) // imageRouter 연결
    app.use("/users", userRouter)
    app.listen(PORT, () => console.log(PORT + "번 포트 listen 중~"))
  })
  .catch((e) => { console.log(e) })
