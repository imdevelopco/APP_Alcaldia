const express = require('express');
const router = express.Router();
const {execQuery} = require('../../Models/alcaldia.model');

router.get("/jornada",(req,res) =>{
    execQuery(req,res,"SELECT * FROM sistemas.jornada;")   
});

router.get("/enfermedad/:id",(req,res) =>{
    execQuery(req,res,"SELECT * FROM sistemas.jornada WHERE id_jornada =" +req.params.id+ ";");   
});

router.put("/jornada",async (req,res) => {
    const {id_jornada,descripcion} = req.body;
    execQuery(req,res,"Update sistemas.jornada SET descripcion='" + descripcion +"' WHERE id_jornada="+id_jornada+";");
    res.end("Update realizado");  
});

router.post("/jornada",async (req,res) => {
    const {descripcion} = req.body;
    execQuery(req,res,"INSERT INTO sistemas.jornada VALUES('" + descripcion +"');");
    res.end("insert realizado");  
});

router.delete("/jornada",async(req,res) =>{
    const {descripcion} = req.body;
    execQuery(req,res,"DELETE FROM sistemas.jornada WHERE descripcion = '"+ descripcion +"'")
    res.end("delete realizado");
});

module.exports = router;