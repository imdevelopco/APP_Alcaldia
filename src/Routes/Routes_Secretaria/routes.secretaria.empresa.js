const express = require('express');
const router = express.Router();
const {execQuery} = require('../../Models/alcaldia.model');

router.get("/empresa",(req,res) =>{
    execQuery(req,res,"SELECT * FROM secretaria.empresa;")   
});

router.get("/empresa/:id",(req,res) =>{
    execQuery(req,res,"SELECT * FROM secretaria.empresa WHERE id_empresa ="+ req.params.id + ";") 
});

router.post("/empresa",async (req,res) => {
    const {id_empresa,nombre_empresa,id_barrio} = req.body;
    execQuery(req,res,"INSERT INTO secretaria.empresa VALUES(" + id_empresa +",'" + nombre_empresa+"'," +id_barrio +");");
    res.end("insert realizado");  
});

router.delete("/empresa",async(req,res) =>{
    const {id_empresa} = req.body;
    execQuery(req,res,"DELETE FROM secretaria.empresa WHERE id_empresa = "+ id_empresa +"")
    res.end("delete realizado");
});

module.exports = router;