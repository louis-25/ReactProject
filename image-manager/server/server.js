require("dotenv").config();
const express = require('express');
const multer = require('multer');
const { v4: uuid } = require('uuid');
const mime = require('mime-types'); //확장자명 붙이는 용도 ~.jpeg
const cors = require("cors");
const mongoose = require("mongoose");
const Image = require("./models/image");

console.log('uuid: ', uuid());

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "./uploads"),
  filename: (req, file, cb) => cb(null, `${uuid()}.${mime.extension(file.mimetype)}`)
})

let imageType = ["image/png", "image/jpeg"]
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    console.log('file ', file)
    if (imageType.includes(file.mimetype)) cb(null, true)
    else cb(new Error('파일 타입이 맞지않습니다'), false)
  },
  limits: {
    fileSize: 1024 * 1024 * 5 // 최대 파일크기 5MB
  }
})

const app = express();
const PORT = 5000;

mongoose
  .connect(process.env.MONGO_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  .then(() => { // MongoDB 연결됨
    console.log("MongoDB Connected.")
    app.use(cors())
    app.use("/uploads", express.static("uploads")) // 외부에서 uploads폴더에 접근가능

    app.post('/upload', upload.single("image"), async (req, res) => {
      await new Image({ key: req.file.filename, originalFileName: req.file.originalname}).save()
      console.log(req.file)
      res.json(req.file)
    })

    app.get("/images", async(req, res) => {
      const images = await Image.find();
      res.json(images);
    });

    app.listen(PORT, () => console.log(PORT + "번 포트 listen 중~"))
  })
  .catch((e) => { console.log(e) })

