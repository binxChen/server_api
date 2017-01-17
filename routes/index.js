/*
* @Author: binxchen
* @Date:   2017-01-17 15:35:36
* @Last Modified by:   binxchen
* @Last Modified time: 2017-01-17 17:53:38
*/

var User = require('../controller/user');

//路由控制
module.exports = function (app) {
    //获取所有用户
    app.get('/users',User.getUsers);
    //获取某个用户
    app.get('/user/:id', User.getUser);
    //删除某个用户
    app.delete('/user/:id', User.delUser);
    //添加一个用户
    app.post('/user', User.addUser);
    //更新一个用户
    app.put('/user/:id', User.updateUser);
};

