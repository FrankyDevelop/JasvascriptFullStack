const { Router } = require("express"); //Desde express requerimos solo su metodo Router
const router = Router();
const { unlink } = require("fs-extra"); //modulo de node encargado de eliminar imagenes
const path = require("path");
const Book = require("../models/book");

//TODO: CRUD de libros

//LISTAR
router.get("/", async (req, res) => {
  //consulta mongodb
  const books = await Book.find();
  res.json(books); //recibimos como respuesta los libros
});

//CREAR
router.post("/", async (req, res) => {
  //Extraer datos de los libros a guardar
  const { title, author, isbn } = req.body;
  //Extraemos el nombre  de la imagen
  const imagePath = "/uploads/" + req.file.filename;
  //Tomamos el contenido que se extrajo
  const newBook = new Book({ title, author, isbn, imagePath });
  //Guardamos el contenido
  await newBook.save();
  res.send({ message: "Libro guardado" });
});

//Delete
router.delete("/:id", async (req, res) => {
  const book=await Book.findByIdAndDelete(req.params.id);
  unlink(path.resolve("./backend/public" + book.imagePath))
  res.send({ message: "Eliminando" });
});
//exportamos la constate router para que la use el index.js
module.exports = router;
