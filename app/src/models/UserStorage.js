"use strict";

class UserStorage {
    static #users = { //static으로 지정하면 이 클래스의 인스턴스를 만들고 users에 접급하지 않고 바로 접근 가능, #으로 지정하면 외부 접근 불가
        id: ["kim", "lee", "park"],
        password: ["123", "1234", "12345"],
        name: ["sang", "bing", "bang"],
    };
    static getUsers(...fields) { // 이함수를 통해 #users에 접근 가능,...fields는 지정한 파라미터를 list형태로 전달
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => { //newUsers는 새로 생성될 data, field는 fieldsd(id, password)의 데이터가 순회하며 대입 
            if (users.hasOwnProperty(field)) { //field에 대입된 id, password가 users에 있는지 확인
                newUsers[field] = users[field];  //있으면 users에 해당 데이터를 newUsers에 대응하여 저장
            }
            return newUsers;
        }, {});
        return newUsers; 
    }
    static getUserInfo(id) { //id를 입력하면 해당 id의 password와 name을 반환
        const users = this.#users;
        const idx=users.id.indexOf(id); //입력 받은 id 값에 해당하는 index를 idx에 대입
        const usersKeys = Object.keys(users); //users에서 key 값만 리스트로 만듬 [id,password,name]
        const userInfo= usersKeys.reduce((newUser, info) => { //userKeys의 값을 info에 순회하면 대입 후 newUser에 저장 
            newUser[info] = users[info][idx]; //users에서 info 즉 입력받은 id(key)와 그에 해당하는 index의 모든 정보(password, name)를 대입
            return newUser;
        }, {});
        return userInfo;

    }
}

module.exports = UserStorage;