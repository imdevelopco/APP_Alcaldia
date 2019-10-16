const express = require('express');
const router = express.Router();
const {execQuery} = require('../../Models/alcaldia.model');

router.get("/guarderia",(req,res) =>{
    execQuery(req,res,"SELECT * FROM secretaria.guarderia;")   
});

router.get("/guarderia/:id",(req,res) =>{
    execQuery(req,res,"SELECT * FROM secretaria.guarderia WHERE id_guarderia ="+ req.params.id + ";") 
});

router.put("/guarderia",async (req,res) => {
    const {id_guarderia,nombre_guarderia,id_barrio} = req.body;
    execQuery(req,res,"UPDATE secretaria.guarderia SET nombre_guarderia='"+nombre_guarderia+
    "',id_barrio="+id_barrio+" WHERE id_guarderia ="+id_guarderia+";");
    res.end("Update realizado");  
});

router.post("/guarderia",async (req,res) => {
    const {id_guarderia,nombre_guarderia,id_barrio} = req.body;
    execQuery(req,res,"INSERT INTO secretaria.guarderia VALUES("+id_guarderia+",'"+nombre_guarderia+"',"+id_barrio+");");
    res.end("insert realizado");  
});

router.delete("/guarderia/:id",async(req,res) =>{
    execQuery(req,res,"DELETE FROM secretaria.guarderia WHERE id_guarderia = "+ req.params.id+"")
    res.end("delete realizado");
});

module.exports = router;