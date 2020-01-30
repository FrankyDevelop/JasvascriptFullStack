//Los servicios son clases con metodos que se pueden reutilizar

class BookServices {
  constructor() {
    this.URI = "http://localhost:3000/api/books";
  }

  //Obtener libros
  async getBook() {
    const response = await fetch(this.URI);
    const books = await response.json();

    return books;
  }
  //Guardar libros
  async postBook(book) {
    const res = await fetch(this.URI, {
      method: "POST",
      body: book
    });
    const data = await res.json(); //No solo mandamos datos sino tambn una imagen
    console.log(data);
  }
  //Eliminar libros
  async deleteBook(bookId) {
    const res = await fetch(`${this.URI}/${bookId}`, {
      headers: {
        "content-type": "application/json" //colcoamos esto porque solo estamos enviando datos
      },
      method: "DELETE"
    });
    const data=await res.json();
    console.log(data);
  }
}


export default BookServices;