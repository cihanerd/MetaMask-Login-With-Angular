var mongo = require('mongodb')
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://cihanerdogan:GDDb8fUbDlBTi445@cluster0.eapsl.mongodb.net/MetaMaskAuthDb?retryWrites=true&w=majority');
var Schema = mongoose.Schema;
var userDataSchema = new Schema({
    name: String,
    address: String
})
var userData = mongoose.model('UserData', userDataSchema);
module.exports = {
  getUsers: async function getUsers() {
       let users = await userData.find();
       return users;
    },
    
 adduser:   function addUser() {
        
    }
  };


