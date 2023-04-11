const db = require('../db/db');


require('dotenv').config()

class ContactService {
    async createContact(contactData) {
        try {
            // //let email = req.body.email; Kalo mau ngeparse body kaya di bawah aja
            const { name, company, phone, email,message,date} = contactData;
            await db.transaction(async (t) => {
                await db('contact').transacting(t).insert({
                    name: name,
                    company: company,
                    phone: phone,
                    email: email,
                    message: message,
                    created_at:date
                });
            })
            return "CONTACT_CREATE_SUCCESSFUL"
        } catch (err) {
            console.log(err);
            throw err;
        }
    }

   
    async getAllContact(){
        try{
            let result = ""
            await db.transaction(async(t)=>{
               result = await db('contact').transacting(t).orderBy('created_at', 'desc')
            })
            return result;
        }catch(err){
            throw (err)
        }
    }

    async filterContact(queryData){
        try{
            const {checked, fromDate, toDate} = queryData
            let result = ""
          
            console.log(queryData)
            await db.transaction(async(t)=>{
               
                if(checked=='false'){
                    console.log(toDate)
                    result = await db('contact').transacting(t).where('created_at','>=', fromDate).where('created_at','<=',toDate)
                    // result = await db('contact').transacting(t).whereBetween('created_at',[fromDate,toDate])
                    
                }else{
                    console.log(" cheked")
                    console.log(checked)
                    result = await db('contact').transacting(t)
                }
            })
         
            return result;
        }catch(err){
            console.log(err)
            throw(err)
        }
    }
}

module.exports = new ContactService();