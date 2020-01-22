//Solo usar variables de entorno en etapa de desarrollo
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();//modulo para variables de entorno
}


const path = require("path"); //resuelve problemas del / en otros SO

const express = require("express");
const morgan = require("morgan"); //nos permite ver lo que las peticiones de aplicaciones clientes
const multer = require("multer"); //modulo para gestionar imagenes
const cors=require('cors');//permite que 2 servidores se puedan comunicar
//Inicializadores
const app = express();
require("./database");

//Settings
app.set("port", process.env.PORT || 3000);

//Middlewares
app.use(morgan("dev"));
const storage = multer.diskStorage({
  destination: path.join(__dirname, "public/uploads"),
  filename(req, file, cb) {
    cb(null, new Date().getTime() + path.extname(file.originalname));
    //con file.originalname obtenemos el nombre del archivo y con path.extraname la extension
    //es decir que con eso sacamos la extension sin el nombre
  }
})
app.use(multer({storage}).single("image")); //con image multer determina si lo que se sube es una imagen
app.use(express.urlencoded({ extended: false })); //interpretar datos de formularios como un JSON
app.use(express.json()); //entender cuando te envian solo JSOn sin formularios incluso
app.use(cors());
//ROUTES
app.use("/api/books", require("./routes/books"));

//STATIC FILES
app.use(express.static(path.join(__dirname, "public")));
//_dirname te coloca en el directorio donde esta este archivo

app.listen(app.get("port"), () => {
  console.log("server on port", app.get("port"));
});
