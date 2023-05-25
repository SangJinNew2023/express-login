"use strict";

const UserStorage = require("./UserStorage");

class User {
    constructor(body) { //body는 req.body로 user로 부터 입력된 데이터
        this.body = body; //User model의 body에 대입
        console.log(this.body)
    }
    

    login() {
        const {id, password}= UserStorage.getUserInfo(this.body.id); //storage로 부터 data를 요청하여 받아온다.


        if (id) {//id가 user 스토리지에 있는지 확인
            if (id === this.body.id && password === this.body.password) { //request .body의 id와 password가 같은지 비교
                return {success: true}; // 둘다 같으면 true를 반환
            }
            return { success: false, msg:" 비밀번호가 틀렸습니다."} //password가 틀린 경우에 해당
        }
        return { success: false, msg: "존재하지 않는 아이디입니다."}; //id가 storage에 없는 경우에 해당
    }
    
}


module.exports = User;