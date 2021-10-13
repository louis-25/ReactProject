const express =require('express')

const app = express();
const PORT = 5000;

app.post('/upload', (req, res) => {
  console.log('/upload called')
  res.json({result: "success"})
})

app.listen(PORT, () => console.log(PORT+"번 포트 listen 중~"))