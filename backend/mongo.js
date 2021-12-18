var mongo = require('mongodb')
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://cihanerdogan:GDDb8fUbDlBTi445@cluster0.eapsl.mongodb.net/MetaMaskAuthDb?retryWrites=true&w=majority');
var Schema = mongoose.Schema;
var userDataSchema = new Schema({
    _id: String,
    nonce: String
})
var UserData = mongoose.model('UserData', userDataSchema);
module.exports = {
    getUsers: async function getUsers() {
        let users = await UserData.find();
        return users;
    },

    upsertUser: async function upsertUser(address) {
        let res="0";
        await UserData.findById(address).exec().then((doc) => {
            if (!doc) {
                doc = new UserData();
                doc._id = address;
                doc.nonce = Math.floor(Math.random() * 1000000).toString();
                doc.save();
            }
            res= doc.nonce;
        })
        return res;
    }

};


