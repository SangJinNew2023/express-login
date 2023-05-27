"use strict";

const id = document.querySelector("#id"), //선택자 중복을 방지하기위해 #을 이용해 tag상의 id에 해당하는 정보를 가져옴
    name=document.querySelector("#name"),
    password = document.querySelector("#password"),
    confirmPassword = document.querySelector("#confirm-password"),
    registerBtn = document.querySelector("#button") //#을 사용해 id="button"을 불러옴


registerBtn.addEventListener("click", register);

function register() {
    if(!id.value) return alert("아이디를 입력해주세요.")
    if (password !== confirmPassword) return alert("비밀번호가 일치하지 않습니다.")
    const req = {
        id: id.value,
        name: name.value,
        password: password.value,
    };

    fetch("/register", {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req), //req를 JSON 형태로 변환
    })
    .then((res) => res.json()) //서버로 부터 응답이 오면 JSON 메세드를 호출해서 promise 객체를 반환
    .then((res) => { //promise 객체 반화 후 다음 과정 접근 가능
        if (res.success) { //res.success가 true일 경우
            location.href = "/login"; //"/"로 이동
        } else {
            alert(res.msg);  
        } 
    })
    .catch((err) => {
        console.error("Failed to register");
    });
};