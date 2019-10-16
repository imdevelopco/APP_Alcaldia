const express = require('express');
const router = express.Router();
const {execQuery} = require('../../Models/alcaldia.model');

router.get("/empleado",(req,res) =>{
    execQuery(req,res,"SELECT * FROM sistemas.empleado;")   
});

router.get("/empleado/:id",(req,res) =>{
    execQuery(req,res,"SELECT * FROM sistemas.empleado WHERE numero_identificacion ="+ req.params.id + "AND estado=1;")   
});

router.put("/empleado",async (req,res) => {
    const {sueldo,estado,antiguedad,numero_identificacion,tipo_identificacion,id_empresa} = req.body;
    execQuery(req,res,"UPDATE sistemas.empleado SET sueldo=" +sueldo+ ",estado=" +estado+ ",antiguedad='" +antiguedad
    + "',tipo_identificacion='" +tipo_identificacion+ 
    "',id_empresa="+id_empresa+" WHERE numero_identificacion=" +numero_identificacion);
    console.log(sueldo,estado,antiguedad,numero_identificacion,tipo_identificacion,id_empresa);
    res.end("Update realizado"); 
});

router.post("/empleado",async (req,res) => {
    const {sueldo,estado,antiguedad,numero_identificacion,tipo_identificacion,id_empresa} = req.body;
    execQuery(req,res,"INSERT INTO sistemas.empleado VALUES(" +sueldo+ "," +estado+ ",'" +antiguedad+ "'," +numero_identificacion+ ",'" +tipo_identificacion+ "'," +id_empresa+ ");");
    console.log(sueldo,estado,antiguedad,numero_identificacion,tipo_identificacion,id_empresa);
    res.end("insert realizado"); 
});

router.delete("/empleado",async(req,res) =>{
    const {numero_identificacion} = req.body;
    execQuery(req,res,"DELETE FROM sistemas.empleado WHERE numero_identificacion = "+ numero_identificacion + "AND estado=0" );
    res.end("delete realizado");
});

module.exports = router;