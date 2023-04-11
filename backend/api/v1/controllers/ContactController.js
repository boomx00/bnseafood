require('dotenv').config()

const ContactService = require('../services/ContactService')
class ContactController {
  //  Handle local register
  async createContact(req, res, next) {
    try {
      // console.log(req.body)
      const result = await ContactService.createContact(req.body);
      console.log(result)
      if (result == "CONTACT_CREATE_SUCCESSFUL") {
        res.status(201).send({
          'status': 'FEEDBACK_SUCCESS',
        })
      }
    }
    catch (err) {
      // console.log(err)
        res.status(500).send({
          'status': 'FEEDBACK_FAILED',
          'err': err
        })
    }
  }

  async getAllContact(req, res, next) {
    try {
      console.log("yes")
      const result = await ContactService.getAllContact();
        res.status(201).send({
          'data': result
        })
    }
    catch (err) {
        res.status(500).send({
          'status': 'GET_FAILED',
          'err': err
        })
    }
  }

  async filterContact(req,res,next){
    try{
        const result = await ContactService.filterContact(req.query.data)
        res.status(201).send({
          'data': result
        })
  //       const path = "./files";
  //       const options = {
  //         filename: './streamed-workbook.xlsx',
  //         useStyles: true,
  //         useSharedStrings: true
  //       };
  //       const workbook = new excelJS.stream.xlsx.WorkbookWriter(options);
  //       const worksheet = workbook.addWorksheet("My Users"); // New Worksheet
  //       worksheet.columns = [
  //         { header: "S no.", key: "s_no", width: 10 },          
  //         { header: "Date", key: "created_at", width: 20 },
 
  //         { header: "Name", key: "name", width: 30 },
  //         { header: "Phone", key: "phone", width: 30 },
  //         { header: "Company", key: "company", width: 30 },
  //         { header: "Email", key: "email", width: 30 },
  //         { header: "Message", key: "message", width: 80 },



  //     ];
  //       let counter = 1;

  //       result.forEach((contact) => {
  //           contact.s_no = counter;
  //           worksheet.addRow(contact); // Add data in worksheet
  //           counter++;
  //         });
  //         worksheet.getRow(1).eachCell((cell) => {
  //           cell.font = { bold: true };
  //         });
  //         worksheet.commit()
  //         res.setHeader('Content-disposition', 'attachment; filename="contact-list"')
  // res.setHeader('Content-type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
  //         workbook.stream.pipe()
  //         workbook.stream.end()
    }catch(err){
      res.status(500).send({
        'status': 'FILTER_FAILED',
        'err': err
      })
    }
  }

 
}

module.exports = new ContactController();