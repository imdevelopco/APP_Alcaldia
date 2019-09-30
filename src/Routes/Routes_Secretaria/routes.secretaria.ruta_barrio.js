const express = require('express');
const router = express.Router();
const {execQuery} = require('../../Models/alcaldia.model');

router.get("/ruta_barrio",(req,res) =>{
    execQuery(req,res,"SELECT * FROM secretaria.ruta_barrio;")   
});

router.get("/ruta_barrio/:id_ruta&:id_barrio",(req,res) =>{
    execQuery(req,res,"SELECT * FROM secretaria.ruta_barrio WHERE id_ruta = "+req.params.id_ruta+" AND id_barrio ="+req.params.id_barrio+";")   
    });

router.post("/ruta_barrio",async (req,res) => {
    const {id_barrio,id_ruta,fecha_contrato} = req.body;
    execQuery(req,res,"INSERT INTO secretaria.ruta_barrio VALUES("+id_barrio+","+id_ruta+",'"+fecha_contrato+"');");
    res.end("insert realizado");  
});

router.delete("/ruta_barrio",async(req,res) =>{
    execQuery(req,res,"DELETE FROM secretaria.ruta_barrio WHERE id_ruta = "+req.body.id_ruta+" AND id_barrio ="+req.body.id_barrio+";")   
    res.end("delete realizado");
});

module.exports = router;