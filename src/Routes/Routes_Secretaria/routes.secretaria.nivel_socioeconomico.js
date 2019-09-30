const express = require('express');
const router = express.Router();
const {execQuery} = require('../../Models/alcaldia.model');

router.get("/nivel_socioeconomico",(req,res) =>{
    execQuery(req,res,"SELECT * FROM secretaria.nivel_socioeconomico;")   
});

router.get("/nivel_socioeconomico/:id",(req,res) =>{
    execQuery(req,res,"SELECT * FROM secretaria.nivel_socioeconomico WHERE id_nivel_socioeconomico = "+ req.params.id)   
});

router.post("/nivel_socioeconomico",async (req,res) => {
    const {descripcion} = req.body;
    execQuery(req,res,"INSERT INTO secretaria.nivel_socioeconomico(descripcion) VALUES('" + descripcion +"');");
    res.end("insert realizado");  
});

router.delete("/nivel_socioeconomico",async(req,res) =>{
    const {descripcion} = req.body;
    execQuery(req,res,"DELETE FROM secretaria.ruta WHERE descripcion = '"+ descripcion +"'")
    res.end("delete realizado");
});

module.exports = router;