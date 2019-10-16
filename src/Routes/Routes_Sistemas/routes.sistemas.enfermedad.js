const express = require('express');
const router = express.Router();
const {execQuery} = require('../../Models/alcaldia.model');

router.get("/enfermedad",(req,res) =>{
    execQuery(req,res,"SELECT * FROM sistemas.enfermedad ORDER BY id_enfermedad ASC;")   
});

router.get("/enfermedad/:id",(req,res) =>{
    execQuery(req,res,"SELECT * FROM sistemas.enfermedad WHERE id_enfermedad =" +req.params.id+ ";");   
});

router.put("/enfermedad",async (req,res) => {
    const {id_enfermedad,descripcion} = req.body;
    execQuery(req,res,"UPDATE sistemas.enfermedad SET descripcion='" +descripcion+ "' WHERE  id_enfermedad="+id_enfermedad+";");
    res.end("Update realizado");  
});

router.post("/enfermedad",async (req,res) => {
    const {descripcion} = req.body;
    execQuery(req,res,"INSERT INTO sistemas.enfermedad VALUES('" +descripcion+ "');");
    res.end("insert realizado");  
});

router.delete("/enfermedad",async(req,res) =>{
    const {id_enfermedad} = req.body;
    execQuery(req,res,"DELETE FROM sistemas.enfermedad WHERE id_enfermedad = " +id_enfermedad);
    res.end("delete realizado");
});

module.exports = router;