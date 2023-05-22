"use strict";

const id = document.querySelector("#id"), //선택자 중복을 방지하기위해 #을 이용해 tag상의 id에 해당하는 정보를 가져옴
    password = document.querySelector("#password"),
    loginBtn = document.querySelector("button")

loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
        password: password.value,
    };
    console.log(req);
};