const express = require('express');
const router = express.Router();
const {SELECT} = require('../Models/alcaldia.model');
const sql = require("msnodesqlv8");


router.get("/select",(req,res) =>{
    SELECT(req,res,"SELECT * FROM secretaria.barrio")   
});

//  router.get("/",(req,res) =>{
//      res.end("a");
//  });
module.exports = router;