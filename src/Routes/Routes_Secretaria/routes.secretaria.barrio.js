const express = require('express');
const router = express.Router();
const {execQuery} = require('../../Models/alcaldia.model');

router.get("/barrio",(req,res) =>{
    execQuery(req,res,"SELECT * FROM secretaria.barrio;")   
});

router.get("/barrio/:id",(req,res) =>{
    execQuery(req,res,"SELECT * FROM secretaria.barrio WHERE id_barrio ="+ req.params.id + ";")   
});

router.put("/barrio",(req,res) => {
    const {id_barrio,nombre,area,id_nivel_socioeconomico,id_localidad} = req.body;
    execQuery(req,res,"UPDATE secretaria.barrio "+
    "SET nombre = '"+ nombre + "', area = '"+ area +"',"+
    " id_nivel_socioeconomico = "+id_nivel_socioeconomico+",id_localidad = "+id_localidad+
    " WHERE id_barrio ="+ id_barrio + ";")   
    res.end("Update Realizado");
});

router.post("/barrio",async (req,res) => {
    const {descripcion} = req.body;
    execQuery(req,res,"INSERT INTO secretaria.barrio(descripcion) VALUES('" + descripcion +"');");
    res.end("insert realizado");  
});

router.delete("/barrio",async(req,res) =>{
    const {descripcion} = req.body;
    execQuery(req,res,"DELETE FROM secretaria.barrio WHERE descripcion = '"+ descripcion +"'")
    res.end("delete realizado");
});

module.exports = router;