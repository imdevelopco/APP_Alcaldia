const express = require('express');
const router = express.Router();
const {execQuery} = require('../../Models/alcaldia.model');

router.get("/jornada",(req,res) =>{
    execQuery(req,res,"SELECT * FROM sistemas.jornada;")   
});

router.post("/jornada",async (req,res) => {
    const {descripcion} = req.body;
    execQuery(req,res,"INSERT INTO sistemas.jornada(descripcion) VALUES('" + descripcion +"');");
    res.end("insert realizado");  
});

router.delete("/jornada",async(req,res) =>{
    const {descripcion} = req.body;
    execQuery(req,res,"DELETE FROM sistemas.jornada WHERE descripcion = '"+ descripcion +"'")
    res.end("delete realizado");
});

module.exports = router;