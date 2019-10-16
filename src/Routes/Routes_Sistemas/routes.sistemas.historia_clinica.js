const express = require('express');
const router = express.Router();
const {execQuery} = require('../../Models/alcaldia.model');

router.get("/historia_clinica",(req,res) =>{
    execQuery(req,res,"SELECT * FROM sistemas.historia_clinica;")   
});

router.get("/historia_clinica/:consec",(req,res) =>{
    execQuery(req,res,"SELECT * FROM sistemas.historia_clinica WHERE consecutivo =" +req.params.consec+ ";");   
});

router.put("/historia_clinica",async (req,res) => {
    const {consecutivo,fecha_HC,diagnostico,nombre_entidad_salud,numero_identificacion,tipo_identificacion} = req.body;
    execQuery(req,res,"Update sistemas.historia_clinica SET fecha_HC = '"+fecha_HC+"',diagnostico='"+diagnostico
    +"',nombre_entidad_salud='"+nombre_entidad_salud+"',numero_identificacion="+numero_identificacion
    +",tipo_identificacion='"+tipo_identificacion+"' WHERE consecutivo = "+consecutivo+";");
    res.end("Update realizado");  
});

router.post("/historia_clinica",async (req,res) => {
    const {consecutivo,fecha_HC,diagnostico,nombre_entidad_salud,numero_identificacion,tipo_identificacion} = req.body;
    execQuery(req,res,"INSERT INTO sistemas.historia_clinica VALUES("+consecutivo+",'"+fecha_HC+"','"+diagnostico+"','"+nombre_entidad_salud+"',"+numero_identificacion+",'"+tipo_identificacion+"'"+");");
    res.end("insert realizado");  
});

router.delete("/historia_clinica",async(req,res) =>{
    const {consecutivo} = req.body;
    execQuery(req,res,"DELETE FROM sistemas.historia_clinica WHERE consecutivo = "+ consecutivo);
    res.end("delete realizado");
});

module.exports = router;