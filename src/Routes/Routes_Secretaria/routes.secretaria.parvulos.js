const express = require('express');
const router = express.Router();
const {execQuery} = require('../../Models/alcaldia.model');

router.get("/parvulos",(req,res) =>{
    execQuery(req,res,"SELECT * FROM secretaria.parvulos ;")   
});

router.get("/parvulos/:id",(req,res) =>{
    execQuery(req,res,"SELECT * FROM secretaria.parvulos WHERE numero_identificacion = "+ req.params.id+";")   
});

router.post("/parvulos",async (req,res) => {
    const {estado,numero_identificacion,tipo_identificacion,id_guarderia} = req.body;
    execQuery(req,res,"INSERT INTO secretaria.parvulos VALUES(" + estado + "," + numero_identificacion + ",'" + tipo_identificacion + "'," + id_guarderia +");");
    res.end("insert realizado");  
});

router.delete("/parvulos",async(req,res) =>{
    const {numero_identificacion} = req.body;
    execQuery(req,res,"DELETE FROM secretaria.parvulos WHERE numero_identificacion = "+ numero_identificacion  +"")
    res.end("delete realizado");
});

module.exports = router;