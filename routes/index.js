const express = require('express');
const router = express.Router();
const pool = require('../config/database');

router.get('/', async (req, res) => {
    const cursos = await pool.query('SELECT inscritos FROM CURSO order by inscritos desc');
    console.log(cursos);
    //res.redirect('index'); //redirige a index pero esta vacio
    res.send(cursos); //muestra la consulta en la pagina
});

router.get('/curso', async (req,res)=>{
    const cursosF = await pool.query('SELECT * FROM CURSO order by created_at');
    res.send(cursosF);
});

router.get('/curso:id',async (req,res)=>{
    const cursoUnico = await pool.query('SELECT * FROM CURSO where id =',{$id});
});
module.exports = router;