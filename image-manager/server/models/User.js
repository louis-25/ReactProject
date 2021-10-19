const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true},
    username: { type: String, required: true, unique: true}, //unique : 고유한 유저를 생성할 수 있도록 인덱싱값 저장해준다
    hashedPassword: { type: String, required: true},
  },
  { timestamps: true }
);

module.exports =  mongoose.model("user", UserSchema) // user에 UserSchema데이터 저장