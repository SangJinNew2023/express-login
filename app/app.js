"use strict";

//module
const express = require("express"); //import express from 'express';
const app = express();
//routing
const home = require("./src/routes/home");

//app settings
app.set("views", "./src/views")
app.set("view engine", "ejs"); //view를 해석하는 엔진 지정
app.use(express.static(`${__dirname}/src/public`)); //dirname는 app.js의 경로, public 폴더 연결

app.use("/", home); //use ->middleware를 등록하는 메서드

module.exports = app;
