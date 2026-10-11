const myLibrary = [];

function Book(author, title, number_of_pages, read){
    this.id = crypto.randomUUID();
    this.author = author;
    this.title = title;
    this.number_of_pages = number_of_pages;
    this.read = read;
}

function addBookToLibrary(parameters){
   const newBook = new Book(...parameters);
   myLibrary.push(newBook);
}

