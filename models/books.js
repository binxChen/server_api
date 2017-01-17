/*
* @Author: binxchen
* @Date:   2017-01-17 15:14:14
* @Last Modified by:   binxchen
* @Last Modified time: 2017-01-17 15:30:33
*/
var mongoose = require('mongoose')

var bookschema = new mongoose.Schema({
    book_id:String,
    book_name:String,
    author:String,
    price:String,
    number:Number,
    state:String,
    describe:String,
    tel:Number,
    user_id:String,
    create_date:{type:Date,dafault:Date.now}
});

mongoose.model('Book',bookschema);