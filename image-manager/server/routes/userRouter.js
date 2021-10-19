const { Router } = require("express")
const userRouter = Router()
const User = require("../models/User")
const { hash, compare } = require("bcryptjs")

userRouter.post("/register", async (req, res) => {
  // console.log(req.body)
  try {
    if (req.body.password.length < 6) throw new Error("비밀번호는 최소 6자 이상 입력해주세요")
    if(req.body.username.length < 3) throw new Error("이름은 최소 3자 이상 입력해주세요")
    const hashedPassword = await hash(req.body.password, 10);
    console.log(hashedPassword)
    await new User({
      name: req.body.name,
      username: req.body.username,
      hashedPassword,
    }).save() // req.body의 데이터가 User의 구조를 거쳐 DB에 저장된다
    res.json({ message: "user registered" })
  } catch (e) {
    res.status(400).json({ message: e.message })
  }
})

userRouter.post("/login", async(req, res)=>{
  try{
    const user = await User.findOne({ username: req.body.username }) // username과 일치하는 정보 DB에서 찾아오기
    console.log("user ",user)
    const isValid = await compare(req.body.password, user.hashedPassword) // 사용자가 입력한 정보와 DB값이 일치하는지 비교
    if(!isValid) throw new Error("입력하신 정보가 올바르지 않습니다")
    res.json({message:"user validated"})
  }catch(e) {
    res.status(400).json({message: e.message})
  }
})

module.exports = { userRouter }