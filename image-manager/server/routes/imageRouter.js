const { Router } = require("express")
const imageRouter = Router()
const Image = require("../models/image");
const { upload } = require("../middleware/imageUpload")
const fs = require("fs")
const mongoose = require("mongoose")
const { promisify } = require("util") // 프로미스화 시켜주는 라이브러리

const fileUnlink = promisify(fs.unlink) // fs.unlink - 파일삭제 기능

imageRouter.post('/', upload.single("image"), async (req, res) => {
  // 유저 정보, public 유무 확인
  try{
    if(!req.user) throw new Error("권한이 없습니다.")
    const image = await new Image({
      user: {
        _id: req.user.id,
        name: req.user.name,
        username: req.user.username
      },
      public: req.body.public,
      key: req.file.filename,
      originalFileName: req.file.originalname
    }).save()
    res.json(image)
  } catch(e) {
    console.log(e)
    res.status(400).json({message: e.message})
  }  
})

imageRouter.get("/", async (req, res) => {
  // public 이미지만 제공
  const images = await Image.find({public: true});
  res.json(images);
});

imageRouter.delete("/:imageId", async (req, res) => {
  // 유저 권한 확인
  // 사진 삭제
  // 1. uploads 폴더에 있는 사진 데이터를 삭제
  // 2. 데이터베이스에 있는 image 문서를 삭제
  try {
    console.log(req.params)
    if(!req.user) throw new Error("권한이 없습니다.")
    if(!mongoose.isValidObjectId(req.params.imageId)) // DB에 없는 imageid 값 호출시
      throw new Error("올바르지 않은 imageId입니다.")

    const image = await Image.findOneAndDelete({_id: req.params.imageId}); // id값을 DB에서 찾아서 삭제
    if(!image) 
      return res.json({message: "요청하싱 사진은 이미 삭제되었습니다"})

    await fileUnlink(`./uploads/${image.key}`) // uploads폴더에 있는 사진 데이터 삭제    
    res.json({message: "요청하신 이미지가 삭제되었습니다.", image})    
  } catch(e) {
    console.log(e)
    res.status(400).json({message: e.message})
  }
})

imageRouter.patch("/:imageId/like", async (req, res) => {
  // 유저 권한 확인
  // like 중복 안되도록 확인
  try {
    if(!req.user) throw new Error("권한이 없습니다.")
    if(!mongoose.isValidObjectId(req.params.imageId)) // DB에 없는 imageid 값 호출시
      throw new Error("올바르지 않은 imageId입니다.")
    // 첫번째- 찾을값 , 두번째 - 업데이트, 세번째 - 옵션
    const image = await Image.findOneAndUpdate(
      {_id: req.params.imageId},
      {$addToSet: {likes: req.user.id}}, // $addToSet - $push하려는 값이 배열에 없을때만 $push(따로 Validation 안해줘도됨)
      {new: true} //new: true - 업데이트 된 문서를 반환
    ) 
    res.json(image)
  } catch(e) {
    console.log(e)
    res.status(400).json({message: e.message})
  }
})

imageRouter.patch("/:imageId/unlike", async (req, res) => {
  // 유저 권한 확인
  // like 중복 취소 안되도록 확인
  try {
    if(!req.user) throw new Error("권한이 없습니다.")
    if(!mongoose.isValidObjectId(req.params.imageId)) // DB에 없는 imageid 값 호출시
      throw new Error("올바르지 않은 imageId입니다.")
      const image = await Image.findOneAndUpdate(
        {_id: req.params.imageId},
        {$pull: {likes: req.user.id}}, // $pull - 배열에서 삭제
        {new: true} //new: true - 업데이트 된 문서를 반환
      ) 
  } catch(e) {
    console.log(e)
    res.status(400).json({message: e.message})
  }
})

module.exports={imageRouter}