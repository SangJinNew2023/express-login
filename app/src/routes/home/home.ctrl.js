"use strict";

const home = (req, res) => {
    res.render("home/index");
};

const login = (req, res) => {
    res.render("home/login");
};

module.exports = {
    home, //hello:hello랑 같음
    login,//login:login이랑 같음
};