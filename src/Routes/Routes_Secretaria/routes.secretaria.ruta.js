const express = require('express');
const router = express.Router();
const {execQuery} = require('../../Models/alcaldia.model');

router.get("/ruta",(req,res) =>{
    execQuery(req,res,"SELECT * FROM secretaria.ruta;")   
});

router.get("/ruta/:id",(req,res) =>{
    execQuery(req,res,"SELECT * FROM secretaria.ruta WHERE id_ruta = "+ req.params.id+";")   
});

router.put("/ruta",(req,res)=>{
    const{id_ruta,descripcion} = req.body
    execQuery(req,res,"UPDATE secretaria.ruta SET descripcion = '"+ descripcion + "' WHERE id_ruta ="+ id_ruta + ";") 
    res.end("Update realizado");   
});

router.post("/ruta",async (req,res) => {
    const {descripcion} = req.body;
    execQuery(req,res,"INSERT INTO secretaria.ruta(descripcion) VALUES('" + descripcion +"');");
    res.end("insert realizado");  
});

router.delete("/ruta",async(req,res) =>{
    const {descripcion} = req.body;
    execQuery(req,res,"DELETE FROM secretaria.ruta WHERE descripcion = '"+ descripcion +"'")
    res.end("delete realizado");
});

module.exports = router;