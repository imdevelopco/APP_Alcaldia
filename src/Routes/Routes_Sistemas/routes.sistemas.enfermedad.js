const express = require('express');
const router = express.Router();
const {execQuery} = require('../../Models/alcaldia.model');

router.get("/enfermedad",(req,res) =>{
    execQuery(req,res,"SELECT * FROM sistemas.enfermedad;")   
});

router.post("/enfermedad",async (req,res) => {
    const {descripcion} = req.body;
    execQuery(req,res,"INSERT INTO secretaria.ruta(descripcion) VALUES('" + descripcion +"');");
    res.end("insert realizado");  
});

router.delete("/enfermedad",async(req,res) =>{
    const {descripcion} = req.body;
    execQuery(req,res,"DELETE FROM secretaria.ruta WHERE descripcion = '"+ descripcion +"'")
    res.end("delete realizado");
});

module.exports = router;