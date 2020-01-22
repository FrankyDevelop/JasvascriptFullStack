//version de emmascript 6
import "./styles/app.css";
//Solo importamos 
import BookServices from './services/BookServices';

//Capturando datos del formulario

document.getElementById("book-form").addEventListener("submit", e => {
  const title = document.getElementById("title").value; //capturamos su valor
  const author = document.getElementById("author").value;
  const isbn = document.getElementById("isbn").value;
  const image = document.getElementById("image").files;

 //FormData es como un formulario virtual de javascript
  const formData=new FormData();
  formData.append('title',title);
  formData.append('author',author);
  formData.append('isbn',isbn);
  formData.append('image',image[0]);

  const bookService=new BookServices();
  //Guardar libro
  bookService.postBook(formData);
  e.preventDefault();//evitamos que la pagina recargue al ejecutar una funcion
});
