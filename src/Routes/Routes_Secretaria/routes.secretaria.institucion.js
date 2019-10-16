        const express = require('express');
const router = express.Router();
const {execQuery} = require('../../Models/alcaldia.model');

router.get("/institucion",(req,res) =>{
    execQuery(req,res,"SELECT * FROM secretaria.institucion;")   
});

router.get("/institucion/:id",(req,res) =>{
    execQuery(req,res,"SELECT * FROM secretaria.institucion WHERE id_institucion = "+req.params.id+";")   
});

router.put("/institucion",async (req,res) => {
    const {id_institucion,nombre_institucion,id_barrio} = req.body;
    execQuery(req,res,"UPDATE secretaria.institucion SET nombre_institucion='"+nombre_institucion+"',id_barrio="+id_barrio
    +" WHERE id_institucion ="+id_institucion+";");
    res.end("Update realizado");  
});

router.post("/institucion",async (req,res) => {
    const {id_institucion,nombre_institucion,id_barrio} = req.body;
    execQuery(req,res,"INSERT INTO secretaria.institucion VALUES(" + id_institucion +",'"+nombre_institucion+"',"+id_barrio+");");
    res.end("insert realizado");  
});

router.delete("/institucion/:id",async(req,res) =>{
    execQuery(req,res,"DELETE FROM secretaria.institucion WHERE id_institucion = "+req.params.id+";")   
    res.end("delete realizado");
});

module.exports = router;