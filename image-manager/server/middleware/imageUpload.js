const multer = require('multer'); // 파일 업로드용 미들웨어
const { v4: uuid } = require('uuid');
const mime = require('mime-types'); //확장자명 붙이는 용도 ~.jpeg
const multerS3 = require("multer-s3")
const { s3 } = require("../aws")

// 로컬 서버
// const storage = multer.diskStorage({
//   //서버에 저장할 폴더
//   destination: (req, file, cb) => cb(null, "./uploads"),
//   //서버에 저장할 파일명
//   filename: (req, file, cb) => cb(null, `${uuid()}.${mime.extension(file.mimetype)}`)
// })

// aws s3 서버
const storage = multerS3({
  s3,
  bucket: "image-upload-react",
  key: (req, file, cb)=>{
    cb(null, `raw/${uuid()}.${mime.extension(file.mimetype)}`)
  }
})

let imageType = ["image/png", "image/jpeg", "image/jpg", "image/gif"]
const upload = multer({
  storage, // 업로드 설정값
  fileFilter: (req, file, cb) => {
    console.log('file ', file)
    if (imageType.includes(file.mimetype)) cb(null, true) // 파일 타입이 맞는지 비교
    else cb(new Error('파일 타입이 맞지않습니다'), false) // 타입이 맞지 않으면 에러반환
  },
  limits: {
    fileSize: 1024 * 1024 * 5 // 최대 파일크기 5MB
  }
})

module.exports={upload};