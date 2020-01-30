//version de emmascript 6
import "./styles/app.css";
import UI from "./UI";

//Ejecutar accion al cargar la pagina
document.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
  ui.renderBooks();
});

//Capturando datos del formulario

document.getElementById("book-form").addEventListener("submit", e => {
  const title = document.getElementById("title").value; //capturamos su valor
  const author = document.getElementById("author").value;
  const isbn = document.getElementById("isbn").value;
  const image = document.getElementById("image").files;

  //FormData es como un formulario virtual de javascript
  const formData = new FormData();
  formData.append("title", title);
  formData.append("author", author);
  formData.append("isbn", isbn);
  formData.append("image", image[0]);

  //Instanciamos la clase UI
  const ui = new UI();

  //Metodo apra guardar libros de la clase UI
  ui.addNewBook(formData);
  //Mensaje de dato guardado
  ui.renderMessage("Nuevo libro guardado", "success", 3000);

  e.preventDefault(); //evitamos que la pagina recargue al ejecutar una funcion
});

document.getElementById("book-card").addEventListener("click", e => {
  if (e.target.classList.contains("delete")) {
    const ui = new UI();
    ui.deleteBook(e.target.getAttribute("_id"));
    //Mensaje de dato guardado
    ui.renderMessage("Se ah eliminado un libro exitosamente", "danger", 3000);
  }

  e.preventDefault();
});
