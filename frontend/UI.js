import BookServices from "./services/BookServices";
const bookService = new BookServices();

import { format } from "timeago.js";

class UI {
  //cargar libros guardados
  async renderBooks() {
    const books = await bookService.getBook();
    //renderizar en la interfaz
    const bookCard = document.getElementById("book-card");
    bookCard.innerHTML = ``; //los inciamos vacios

    books.forEach(book => {
      const div = document.createElement("div");
      div.className = ``;
      div.innerHTML = `<div class="card md-2">
      <div class="row">
        <div class="col-md-4">
          <img src="http://localhost:3000${
            book.imagePath
          }" alt="" class="img-fluid">
         </div>
         <div class="col-md-8">
           <div class="card-block px-2">
             <h4 class="card-title">${book.title}</h4>
             <p class="card-text">${book.author}</p>
             <a href="#" class="btn btn-danger delete" _id="${book._id}">X</a>
           </div>
         </div>
      </div>
      <div class="card-footer">
      ${format(book.create_at)}
      </div>
    </div>`;

      bookCard.appendChild(div);
    });
  }

  async addNewBook(book) {
    await bookService.postBook(book);
    this.clearBookForm(); //limpia el formulario
    this.renderBooks();
  }

  clearBookForm() {
    //Resetear formulario
    document.getElementById("book-form").reset();
  }

  renderMessage(message, colorMessage, secondsToRemove) {
    const div = document.createElement("div");
    div.className = `alert alert-${colorMessage} message`;
    div.appendChild(document.createTextNode(message));

    const container = document.querySelector(".col-md-4");
    const bookForm = document.querySelector("#book-form");

    container.insertBefore(div,bookForm);
    setTimeout(() => {
      document.querySelector(".message").remove();
    }, secondsToRemove);
  }

  async deleteBook(bookId) {
    await bookService.deleteBook(bookId);
    this.renderBooks();
  }
}

export default UI;
