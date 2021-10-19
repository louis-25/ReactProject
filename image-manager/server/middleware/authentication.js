const mongoose = require("mongoose")
const User = require("../models/User")

const authenticate = async (req, res, next) => {
  const { sessionid } = req.headers
    //로그인 상태가 아니거나 db에 세션이 없는경우
    if(!sessionid || !mongoose.isValidObjectId(sessionid)) return next()
    
    const user = await User.findOne({"sessions._id": sessionid}) // db의 세션과 비교
    
    if(!user) return next()
    req.user = user;
    return next()
}

module.exports = { authenticate }