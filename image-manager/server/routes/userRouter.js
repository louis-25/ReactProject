const { Router } = require("express")
const userRouter = Router()
const User = require("../models/User")

userRouter.post("/register", async(req, res)=>{
  // console.log(req.body)
  await new User(req.body).save() // req.body의 데이터가 User의 구조를 거쳐 DB에 저장된다
  res.json({message:"user registered"})
})

module.exports = { userRouter}