const express = require('express');
const router = express.Router();
const {execQuery} = require('../../Models/alcaldia.model');

router.get("/persona",(req,res) =>{
    execQuery(req,res,"SELECT * FROM sistemas.persona;")   
});

router.post("/persona",async (req,res) => {
    const {descripcion} = req.body;
    execQuery(req,res,"INSERT INTO sistemas.persona(descripcion) VALUES('" + descripcion +"');");
    res.end("insert realizado");  
});

router.delete("/persona",async(req,res) =>{
    const {descripcion} = req.body;
    execQuery(req,res,"DELETE FROM sistemas.persona WHERE descripcion = '"+ descripcion +"'")
    res.end("delete realizado");
});

module.exports = router;