const express = require('express');
const router = express.Router();
const {execQuery} = require('../../Models/alcaldia.model');

router.get("/enfermedades_pacientes",(req,res) =>{
    execQuery(req,res,"SELECT * FROM sistemas.Enfermedades_Pacientes;")   
});

router.post("/enfermedades_pacientes",async (req,res) => {
    const {consecutivo, id_enfermedad} = req.body;
    execQuery(req,res,"INSERT INTO sistemas.Enfermedades_Pacientes VALUES(" +consecutivo+ "," +id_enfermedad+ ");");
    res.end("insert realizado");  
});

router.delete("/enfermedades_pacientes/:consec/:idenf",async(req,res) =>{
    execQuery(req,res,"DELETE FROM sistemas.Enfermedades_Pacientes WHERE Historia_Clinica_consecutivo=" +req.params.consec+ "AND id_enfermedad="+req.params.idenf+";")
    res.end("delete realizado");
});

module.exports = router;