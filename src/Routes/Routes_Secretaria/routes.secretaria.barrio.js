const express = require('express');
const router = express.Router();
const {execQuery} = require('../../Models/alcaldia.model');

router.get("/barrio",(req,res) =>{
    execQuery(req,res,"SELECT * FROM secretaria.barrio;")   
});

router.get("/barrio/:id",(req,res) =>{
    execQuery(req,res,"SELECT * FROM secretaria.barrio WHERE id_barrio ="+ req.params.id + ";")   
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