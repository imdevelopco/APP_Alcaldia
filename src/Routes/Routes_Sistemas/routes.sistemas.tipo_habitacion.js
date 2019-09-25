const express = require('express');
const router = express.Router();
const {execQuery} = require('../../Models/alcaldia.model');

router.get("/tipo_habitacion",(req,res) =>{
    execQuery(req,res,"SELECT * FROM sistemas.tipo_habitacion;")   
});

router.post("/tipo_habitacion",async (req,res) => {
    const {descripcion} = req.body;
    execQuery(req,res,"INSERT INTO sistemas.tipo_habitacion(descripcion) VALUES('" + descripcion +"');");
    res.end("insert realizado");  
});

router.delete("/tipo_habitacion",async(req,res) =>{
    const {descripcion} = req.body;
    execQuery(req,res,"DELETE FROM sistemas.tipo_habitacion WHERE descripcion = '"+ descripcion +"'")
    res.end("delete realizado");
});

module.exports = router;