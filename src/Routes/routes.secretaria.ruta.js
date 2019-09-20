const express = require('express');
const router = express.Router();
const {SELECT} = require('../Models/alcaldia.model');

router.get("/barrio",(req,res) =>{
    SELECT(req,res,"SELECT * FROM secretaria.ruta")   
});

router.post("/barrio",async (req,res) => {
    const {descripcion} = req.body;
    SELECT(req,res,"INSERT INTO secretaria.ruta(descripcion) VALUES('" + descripcion +"');");
    res.end("insert realizado");  
});

router.delete("/barrio",async(req,res) =>{
    const {descripcion} = req.body;
    SELECT(req,res,"DELETE FROM secretaria.ruta WHERE descripcion = '"+ descripcion +"'")
    res.end("delete realizado");
});

module.exports = router;