一 项目需求:
编写接口文档:为前端提供登录,注册,购书,上架书籍等功能的接口

二 数据库设计

实体:书籍

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
 
 用户:
   
    var  userschema=new mongoose.Schema({
        username:String,
        password:String
    });
 
  