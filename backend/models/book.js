//De mongoose requerimos Schema y model
const { Schema, model } = require("mongoose");

//creamos un nuevo schema
const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  isbn: { type: String, required: true },
  imagePath: { type: String, required: true },
  create_at: { type: Date, default: Date.now }
});

//Exprotamos el schema
module.exports = model("Book", bookSchema);
