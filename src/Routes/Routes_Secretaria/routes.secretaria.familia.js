const express = require('express');
const router = express.Router();
const {execQuery} = require('../../Models/alcaldia.model');

router.get("/familia",(req,res) =>{
    execQuery(req,res,"SELECT * FROM secretaria.familia;")   
});

router.get("/familia/:id",(req,res) =>{
    execQuery(req,res,"SELECT * FROM secretaria.familia WHERE id_familia ="+ req.params.id + ";") 
});

router.post("/familia",async (req,res) => {
    const {direccion, telefono, id_tipo_habitacion, id_barrio} = req.body;
    execQuery(req,res,"INSERT INTO secretaria.familia(direccion, telefono, id_tipo_habitacion, id_barrio) VALUES('" + direccion +"','" + telefono + "'," + id_tipo_habitacion+"," +id_barrio +");");
    res.end("insert realizado");  
});

router.delete("/familia/:id",async(req,res) =>{
    execQuery(req,res,"DELETE FROM secretaria.familia WHERE familia_id = "+ req.params.id +";")
    res.end("delete realizado");
});

module.exports = router;