var mongo = require('mongodb')
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://cihanerdogan:GDDb8fUbDlBTi445@cluster0.eapsl.mongodb.net/MetaMaskAuthDb?retryWrites=true&w=majority');
var Schema = mongoose.Schema;
var userDataSchema = new Schema({
    name: String,
    address: String
})
var UserData = mongoose.model('UserData', userDataSchema);
module.exports = {
  getUsers: async function getUsers() {
       let users = await UserData.find();
       return users;
    },
    
 upsertUser:  function upsertUser(id, user) {
     console.log(user)
        UserData.findById(id, (err,doc)=>{
            if(err){
                console.log('user not found')
            }
            doc=new UserData();
            doc.name=user.name;
            doc.address=user.address;
            doc.save();
        })
    }
  };


