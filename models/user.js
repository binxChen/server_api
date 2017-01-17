
var mongoose = require('mongoose');

var  userschema=new mongoose.Schema({
    username:String,
    password:String
});

mongoose.model('User',userschema);