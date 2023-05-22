"use strict";

const users = {
    id: ["kim", "lee", "park"],
    password: ["123", "1234", "12345"],
};

const output = {
    home: (req, res) => {
        res.render("home/index");
    },
    
    login: (req, res) => {
        res.render("home/login");
    },
};

const process = {
    login: (req, res) => {
        const id = req.body.id,
        password = req.body.password;

        if (users.id.includes(id)) { //users에 해당 id가 있으면
            const idx = users.id.indexOf(id); //indexof를 이용해 uesrs에서 해당 id를 idx로 반환한다.
            if(users.password[idx] === password) { //여기서 password는 request의 password로 users에서 idx에 해당하는 password와 비교
                return res.json({ //맞으면 res로 success 반환
                    success: true,
                });
            }
        }

        return res.json({
            success: false,
            msg: "로그인에 실패하셨습니다."
        })
    },
};

module.exports = {
    output,
    process
};