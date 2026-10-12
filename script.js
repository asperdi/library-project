const myLibrary = [];
const library = document.querySelector(".library");
const show_modal = document.querySelector(".AddBook");
const add_book = document.querySelector(".AddBookDialog");
const dialog = document.querySelector("dialog");
const cancel = document.querySelector(".Cancel");
const book_title = document.querySelector("#book_name");
const book_author = document.querySelector("#book_author");
const page_number = document.querySelector("#page_number");
const read = document.querySelector("#read");

function Book(title, author, number_of_pages, read){
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.number_of_pages = number_of_pages;
    this.read = read;
}

function addBookToLibrary(parameters){
   const newBook = new Book(...parameters);
   myLibrary.push(newBook);
}

function displayBooks(book_array){

    const book = book_array.at(-1);
        const div = document.createElement('div');

        div.classList.add('BookList');
        for(prop in book){            
            const p = document.createElement('p');
            const content = book[prop];
            switch(prop){
                case 'title':
                    let h3 = document.createElement('h3');
                    h3.textContent = content;
                    div.append(h3);
                    break;
                case 'read':
                     p.textContent = content ? 'Read' : 'Unread';
                     break;
                case 'id':
                    break;
                case 'number_of_pages':
                    p.textContent =  `${content} pages`;
                    break;
                default:
                     p.textContent = content;
                     break;

            }
            div.append(p);
        }
        
    library.append(div);
    

}

function close(){
    dialog.close();
    book_title.value = '';
    book_author.value = '';
    page_number.value = '';
    read.textContent = 'Read';
    read.classList.add('read');
    read.classList.remove('unread');
}

show_modal.addEventListener('click', () => {
    dialog.showModal();
});

read.addEventListener('click', () => {
    if(read.textContent == 'Read') read.textContent = 'Unread';
    else read.textContent = 'Read';
    read.classList.toggle('read');
    read.classList.toggle('unread');
});

add_book.addEventListener('click', (e) => {
    e.preventDefault();
    addBookToLibrary([book_title.value, book_author.value, page_number.value, read.textContent == 'Read']);
    close();
    displayBooks(myLibrary);
});

cancel.addEventListener('click', (e) => {
    e.preventDefault();
    close();
});