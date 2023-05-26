"use strict";

const User = require("../../models/User")

const output = {
    home: (req, res) => {
        res.render("home/index");
    },
    
    login: (req, res) => {
        res.render("home/login");
    }, 
    
    register: (req, res) => {
        res.render("home/register");
    },
};

const process = {
    login: (req, res) => {
        const user = new User(req.body);// class User의 인스턴스를 생성하면서 req.body를 인수로 전달
        const response = user.login();
        return res.json(response);


        // const id = req.body.id,
        //     password = req.body.password;
        
        // const users = UserStorage.getUsers("id", "password");
       
    
        // console.log(response);

    //     if (users.id.includes(id)) { //users에 해당 id가 있으면
    //         const idx = users.id.indexOf(id); //indexof를 이용해 uesrs에서 해당 id를 idx로 반환한다.
    //         if(users.password[idx] === password) {
    //             response.success = true; //여기서 password는 request의 password로 users에서 idx에 해당하는 password와 비교
    //             return res.json(response); //맞으면 res로 success 반환
    //         }
    //     }
    //     response.success = false;
    //     response.msg = "로그인에 실패하셨습니다."

    //     return res.json(response);
    },
};

module.exports = {
    output,
    process
};