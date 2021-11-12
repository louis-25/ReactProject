import { config } from '../config.js'
export default class promotionService {

  async submit(data) {
    console.log('data ',data)
    await fetch(config.promotion.submitAddr, {
      method: 'POST',
      headers: {
        "Content-type":"application/json"
      },
      body: JSON.stringify({
        "Company": {
          companyName : data.companyName,
          companyAdminId: data.email,
          companyPhone : data.phoneNumber,
          companySizeType : data.companyScale,
          reason : data.reason
        },
        "User":{
          userId: data.email,
          userName: data.userName,
          userPwd: data.password
        }
      })
    }).then(async (data)=>{
      console.log('res ',data)
      return data
    }).catch(async (e)=>{
      console.log('error ',e)
    })
    
  }
}