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
    fetch("/login", {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req), //req를 JSON 형태로 변환
    })
    .then((res) => res.json())
    .then((res) => {
        if (res.success) { //res.success가 true일 경우
            location.href = "/"; //"/"로 이동
        } else {
            alert(res.msg);  
        } 
    })
    .catch((err) => {
        console.error("Failed to Login");
    });
};