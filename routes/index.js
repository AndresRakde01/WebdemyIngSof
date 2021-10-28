const express = require('express');
const router = express.Router();
const pool = require('../config/database');

router.get('/', async (req, res) => {
    const cursos = await pool.query('SELECT * FROM CURSO');
    console.log(cursos);
    res.send(cursos); //muestra la consulta en la pagina
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const cursos = await pool.query('SELECT * FROM CURSO WHERE id_curso = ?', [id], (err,rows,fields) => {
        if(!err){
            res.json(rows[0]);
        }else{
            console.log(err);
        }
    });
    console.log(cursos);
    res.send(cursos); //muestra la consulta en la pagina
});


module.exports = router;