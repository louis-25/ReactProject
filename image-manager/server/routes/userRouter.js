const { Router } = require("express")
const userRouter = Router()
const User = require("../models/User")
const { hash } = require("bcryptjs")

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

module.exports = { userRouter }