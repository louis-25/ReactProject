const mongoose = require("mongoose")

const ImageSchema = new mongoose.Schema(
  {
    user: {
      // ObjectId - String보다 용량이 적음 / 알아서 인덱싱처리
      _id: {type: mongoose.Types.ObjectId, required: true, index: true},
      name: {type:String, required: true},
      username: {type: String, required: true}
    },
    public: {type: Boolean, required: true, default: false}, // 기본값: false(비공개)
    key: { type: String, required: true },
    originalFileName: { type: String, required: true },
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("image", ImageSchema);