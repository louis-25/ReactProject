import { config } from '../config.js'
export default class promotionService {

  async submit(data) {
    await fetch(config.promotion.submitAddr, {
      method: 'POST',
      headers: {
        "Content-type":"application/json"
      },      
      body: JSON.stringify({
        "Company": {
          companyName : "donghyeon2",
          companyAdminId : "amugeona@fasoo.com2",
          companyPhone : "01011112222",
          companySizeType : 1,
          reason : "테스트용2"
        },
        "User":{
          userId: "testMan2@fasoo.com",
          userName: "testMan2",
          userPwd: "1234"
        }
      })
    }).then((data)=>{
      console.log('res ',data)
      return data
    }).catch((e)=>{
      console.log('error ',e)
    })
    
  }
}