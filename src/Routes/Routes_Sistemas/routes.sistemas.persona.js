const express = require('express');
const router = express.Router();
const {execQuery} = require('../../Models/alcaldia.model');

router.get("/persona",(req,res) =>{
    execQuery(req,res,"SELECT * FROM sistemas.persona;")   
});

router.get("/persona/:id",(req,res) =>{
    execQuery(req,res,"SELECT * FROM sistemas.persona WHERE numero_identificacion =" +req.params.id+ ";");   
});

router.post("/persona",async (req,res) => {
    const {numero_identificacion,tipo_identificacion,fecha_nacimiento,nombres,apellidos,id_familia} = req.body;
    execQuery(req,res,"INSERT INTO sistemas.persona VALUES("+numero_identificacion+",'"+tipo_identificacion+"','"+fecha_nacimiento+"','"+nombres+"','"+apellidos+"',"+id_familia+");");
    res.end("insert realizado");  
});

router.delete("/persona",async(req,res) =>{
    const {numero_identificacion} = req.body;
    execQuery(req,res,"DELETE FROM sistemas.persona WHERE numero_identificacion = "+ numero_identificacion);
    res.end("delete realizado");
});

module.exports = router;