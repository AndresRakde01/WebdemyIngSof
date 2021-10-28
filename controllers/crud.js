<<<<<<< HEAD
const conexion = require('./ruotes/keys.js');
=======
const conexion = require('./config/keys.js');
const pool = requiere('./config/database');
const router = express.Router();

>>>>>>> 23aff0a6c6c7590e0142b40d67636ecc6a702dff
exports.save = (req,res)=>{
    const user = req.body.user; //esta haciendo referencia a algo del 
    const rol = req.body.rol;
    console.log(user +"-");
}
