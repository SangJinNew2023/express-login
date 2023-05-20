"use strict";

//module
const express = require("express"); //import express from 'express';
const app = express();
//routing
const home = require("../routes/home");

//app settings
app.set("views", "./views")
app.set("view engine", "ejs"); //view를 해석하는 엔진 지정


app.use("/", home); //use ->middleware를 등록하는 메서드

module.exports = app;
