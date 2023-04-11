const db = require('../db/db');
const jwt = require('jsonwebtoken')

class TokenService{
    async refreshToken(id, refreshToken){
        try{
            const user =  await db('users').where({id:id}).where({refresh_token:refreshToken})
            if(!user[0]) return "403";
            jwt.verify(refreshToken,process.env.REFRESH_TOKEN_SECRET,(err,decoded)=>{
             if(err) return "403";
             const userId = user[0].id;
             const email = user[0].email;
             const accessToken = jwt.sign({userId,email},process.env.ACCESS_TOKEN_SECRET,{
                 expiresIn:'1h'
             });
             return accessToken
            })
        }catch(e){
            console.log(e)
        }
       
    }
}
module.exports = new TokenService();