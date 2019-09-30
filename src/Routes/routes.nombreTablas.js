const express = require('express');
const router = express.Router();
const {execQuery} = require('../Models/alcaldia.model');

router.get("/tablas",(req,res) =>{
    execQuery(req,res,"SELECT name FROM SYSOBJECTS WHERE   xtype = 'U';")   
});

module.exports = router;
