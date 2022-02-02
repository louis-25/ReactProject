const { Router } = require("express")
const userRouter = Router()
const User = require("../models/User")
const { hash, compare } = require("bcryptjs")
const mongoose = require("mongoose")

userRouter.post("/register", async (req, res) => {
  // console.log(req.body)
  try {
    if (req.body.password.length < 6) throw new Error("비밀번호는 최소 6자 이상 입력해주세요")
    if (req.body.username.length < 3) throw new Error("이름은 최소 3자 이상 입력해주세요")
    const hashedPassword = await hash(req.body.password, 10);
    console.log(hashedPassword)
    const user = await new User({
      name: req.body.name,
      username: req.body.username,
      hashedPassword,
      sessions:[{createdAt: new Date()}] // 회원가입시에도 바로 로그인 할 수 있게 세션 생성
    }).save() // req.body의 데이터가 User의 구조를 거쳐 DB에 저장된다

    const session = user.sessions[0]
    res.json({
      message: "user registered",
      sessionId: session._id,
      name: user.name
    })
  } catch (e) {
    res.status(400).json({ message: e.message })
  }
})

userRouter.patch("/login", async (req, res) => { //post로 요청해도 문제없지만 생성하는게 아니기때문에 patch가 더 올바른표현
  try {
    const user = await User.findOne({ username: req.body.username }) // username과 일치하는 정보 DB에서 찾아오기
    console.log("user ", user)
    const isValid = await compare(req.body.password, user.hashedPassword) // 사용자가 입력한 정보와 DB값이 일치하는지 비교
    if (!isValid) throw new Error("입력하신 정보가 올바르지 않습니다")
    
    user.sessions.push({ createdAt: new Date() })
    const session = user.sessions[user.sessions.length - 1]
    await user.save(); // 로그인 시 세션저장
    res.json({ 
      message: "user validated", 
      sessionId: session._id, 
      name: user.name,
      userId: user._id
    })
  } catch (e) {
    console.log(e)
    res.status(400).json({ message: e.message })
  }
})

userRouter.patch("/logout", async(req, res)=>{
  try{
    console.log('req ',req.headers)
    if (!req.user) throw new Error("invalid sessionid")    

    await User.updateOne(
      { _id: req.user.id }, // 유저를 찾는다
      { $pull: { sessions: { _id: req.headers.sessionid } } } //$pull : 조건에 맞는 객체를 제거시켜준다
    );

    // for (let i in user.sessions) {
    //   // console.log('session ', )
    //   if (user.sessions[i]._id == sessionid) {
    //     delete user.sessions[i]
    //   }
    // }
    // console.log('delete ',user)
    // await user.save();
    
    res.json({ message: "user is logged out." })    
    // console.log(req.headers)    
  }catch(e){
    console.log(e)
    res.status(400).json({message:e.message})
  }
})

module.exports = { userRouter }