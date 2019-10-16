const express = require('express');
const router = express.Router();
const {execQuery} = require('../../Models/alcaldia.model');

router.get("/localidad",(req,res) =>{
    execQuery(req,res,"SELECT * FROM secretaria.localidad;")   
});

router.get("/localidad/:id",(req,res) =>{
    execQuery(req,res,"SELECT * FROM secretaria.localidad WHERE id_localidad ="+req.params.id+";")   
});

router.put("/localidad",async (req,res) => {
    const {id_localidad,descripcion} = req.body;
    execQuery(req,res,"UPDATE secretaria.localidad SET descripcion = '" + descripcion +"' WHERE id_localidad = "+id_localidad+";");
    res.end("Update realizado");  
});

router.post("/localidad",async (req,res) => {
    const {descripcion} = req.body;
    execQuery(req,res,"INSERT INTO secretaria.localidad(descripcion) VALUES('" + descripcion +"');");
    res.end("insert realizado");  
});

router.delete("/localidad",async(req,res) =>{
    const {descripcion} = req.body;
    execQuery(req,res,"DELETE FROM secretaria.localidad WHERE descripcion = '"+ descripcion +"'")
    res.end("delete realizado");
});

module.exports = router;