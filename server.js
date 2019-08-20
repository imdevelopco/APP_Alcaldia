const express = require ('express');
const http = require('http');
const sql = require('mssql');

async () => {
    try {
        await sql.connect('mssql://secretaria_alcaldia:123456@localhost/PROYECTOFINAL')
        const result = await sql.query`select * from secretaria.barrio`
        console.log(result);
    } catch (err) {
        // ... error checks
    }
}