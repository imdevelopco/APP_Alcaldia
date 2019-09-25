const express = require('express');
const router = express.Router();
const {execQuery} = require('../../Models/alcaldia.model');

router.get("/historia_clinica",(req,res) =>{
    execQuery(req,res,"SELECT * FROM sistemas.historia_clinica;")   
});

router.post("/historia_clinica",async (req,res) => {
    const {descripcion} = req.body;
    execQuery(req,res,"INSERT INTO secretaria.ruta(descripcion) VALUES('" + descripcion +"');");
    res.end("insert realizado");  
});

router.delete("/historia_clinica",async(req,res) =>{
    const {descripcion} = req.body;
    execQuery(req,res,"DELETE FROM secretaria.ruta WHERE descripcion = '"+ descripcion +"'")
    res.end("delete realizado");
});

module.exports = router;