const multer = require('multer');
const { v4: uuid } = require('uuid');
const mime = require('mime-types'); //확장자명 붙이는 용도 ~.jpeg

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

module.exports={upload};