const express = require('express');
const router = express.Router();
const {execQuery} = require('../../Models/alcaldia.model');

router.get("/estudiante",(req,res) =>{
    execQuery(req,res,"SELECT * FROM sistemas.estudiante;");    
});

router.get("/estudiante/:id",(req,res) =>{
    execQuery(req,res,"SELECT * FROM sistemas.estudiante WHERE numero_identificacion ="+ req.params.id + "AND estado=1;")   
});

router.put("/estudiante",async (req,res) => {
    const {estado,id_modalidad,numero_identificacion,tipo_identificacion,id_jornada,id_institucion} = req.body;
    execQuery(req,res,"UPDATE sistemas.estudiante SET estado="+estado+",id_modalidad="+id_modalidad
    +",tipo_identificacion='"+tipo_identificacion+"',id_jornada="+id_jornada+",id_institucion="+id_institucion
    +" WHERE numero_identificacion="+numero_identificacion+";");
    res.end("Update realizado");  
});

router.post("/estudiante",async (req,res) => {
    const {estado,id_modalidad,numero_identificacion,tipo_identificacion,id_jornada,id_institucion} = req.body;
    execQuery(req,res,"INSERT INTO sistemas.estudiante VALUES("+estado+","+id_modalidad+","+numero_identificacion+",'"+tipo_identificacion+"',"+id_jornada+","+id_institucion+");");
    res.end("insert realizado");  
});

router.delete("/estudiante",async(req,res) =>{
    const {numero_identificacion} = req.body;
    execQuery(req,res,"DELETE FROM sistemas.estudiante WHERE numero_identificacion = '"+ numero_identificacion +"'");
    res.end("delete realizado");
});

module.exports = router;