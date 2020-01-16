const {Router}=require('express');//Desde express requerimos solo su metodo Router
const router=Router();

router.get('/',(req,res)=>res.json({text:"Hola :v"}));

//exportamos la constate router para que la use el index.js
module.exports=router;