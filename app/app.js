"use strict";

//module
const express = require("express"); //import express from 'express';
const bodyParser = require("body-parser"); //body를 parsing 위한 모듈
const app = express();

//routing
const home = require("./src/routes/home");

//app settings
app.set("views", "./src/views")
app.set("view engine", "ejs"); //view를 해석하는 엔진 지정
app.use(express.static(`${__dirname}/src/public`)); //dirname는 app.js의 경로, public 폴더 연결
app.use(bodyParser.json()); //bodyparser를 미들웨어로 등록
app.use(bodyParser.urlencoded({ extended: true })); //URL을 통해 전달되는 데이터의 한글, 공백등이 포함되어 인식 안되는 문제 해결
app.use("/", home); //use ->middleware를 등록하는 메서드

module.exports = app;
