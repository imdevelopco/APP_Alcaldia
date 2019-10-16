const express = require('express');
const router = express.Router();
const {execQuery} = require('../../Models/alcaldia.model');

router.get("/modalidad_estudio",(req,res) =>{
    execQuery(req,res,"SELECT * FROM sistemas.modalidad_estudio;")   
});

router.get("/modalidad_estudio/:id",(req,res) =>{
    execQuery(req,res,"SELECT * FROM sistemas.modalidad_estudio WHERE id_modalidad =" +req.params.id+ ";");   
});

router.put("/modalidad_estudio",async (req,res) => {
    const {id_modalidad,descripcion} = req.body;
    execQuery(req,res,"Update sistemas.modalidad_estudio SET descripcion='" + descripcion +"' WHERE id_modalidad="+id_modalidad+";");
    res.end("Update realizado");  
});

router.post("/modalidad_estudio",async (req,res) => {
    const {descripcion} = req.body;
    execQuery(req,res,"INSERT INTO sistemas.modalidad_estudio VALUES('" + descripcion +"');");
    res.end("insert realizado");  
});

router.delete("/modalidad_estudio",async(req,res) =>{
    const {descripcion} = req.body;
    execQuery(req,res,"DELETE FROM sistemas.modalidad_estudio WHERE descripcion = '"+ descripcion +"'")
    res.end("delete realizado");
});

module.exports = router;