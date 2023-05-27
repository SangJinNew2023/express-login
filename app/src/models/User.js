"use strict";

const UserStorage = require("./UserStorage");

class User {
    constructor(body) { //constructor는 내부body 데이터를 인스턴스 객체에 전달하기 위해 사용
        this.body = body; //User model의 this.body에  body대입
        console.log(this.body)
    }
    

    login() {
        const client = this.body;
        const {id, password}= UserStorage.getUserInfo(this.client.id); //storage로 부터 data를 요청하여 받아온다.


        if (id) {//id가 user 스토리지에 있는지 확인
            if (id === this.client.id && password === this.client.password) { //request.body의 id와 password가 같은지 비교
                return {success: true}; // 둘다 같으면 true를 반환
            }
            return { success: false, msg:" 비밀번호가 틀렸습니다."} //password가 틀린 경우에 해당
        }
        return { success: false, msg: "존재하지 않는 아이디입니다."}; //id가 storage에 없는 경우에 해당
    }
    register() {
        const client = this.body;
        const response = UserStorage.save(client);
        return response; //constructor(body)에서 받은 body를 그대로 저장
    }
}


module.exports = User;