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
    const repetidos= await pool.query('select count(inscritos) from curso group by inscritos having count(inscritos)>1');
    if(repetidos == 0){
    const cursosIns=await pool.query('SELECT * From CURSO order by inscritos');
    res.send(cursosIns);
    }else{
        const cursosFech=await pool.query('SELECT * FROM CURSO order by fechaCreacion');
        res.send(cursosFech);
    }

    //const cursosF = await pool.query('if((select count(*) from (select inscritos from curso group by having inscritos count(inscritos)>1)==0),SELECT * From CURSO order by inscritos,SELECT * FROM CURSO order by fechaCreacion)');
    
});

router.get('/cursoU',async (req,res)=>{
    //const idCurso= //parte del frontend obtenerlo
    const cursoUnico = await pool.query('SELECT * FROM Modulo join CURSO where id_curso=Curso_id_curso and id_curso = ?',5113);
    res.send(cursoUnico);
});

router.get('/etiqueta', async (req,res)=>{
    //const etiq=
    const cursoEti = await pool.query('SELECT curso.nombre,curso.imagen,curso.inscritos,curso.descripcion,curso.requisitos,curso.duracion,curso.fechaCreacion FROM Etiqueta as E join CURSO Join curso_has_etiqueta  where id_curso = CURSO_id_curso and id_etiqueta=ETIQUETA_id_etiqueta and E.nombre= ?', 'python');
    res.send(cursoEti);
});

router.get('/etiqueta', async (req,res)=>{
    //const etiq=
    const cursoEti = await pool.query('SELECT curso.nombre,curso.imagen,curso.inscritos,curso.descripcion,curso.requisitos,curso.duracion,curso.fechaCreacion FROM Etiqueta as E join CURSO Join curso_has_etiqueta  where id_curso = CURSO_id_curso and id_etiqueta=ETIQUETA_id_etiqueta and E.nombre= ?', 'python');
    res.send(cursoEti);
});



module.exports = router;