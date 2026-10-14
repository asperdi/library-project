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

Book.prototype.ChangeReadStatus = function(){
    this.read = !this.read;
}

function addBookToLibrary(parameters){
   const newBook = new Book(...parameters);
   myLibrary.push(newBook);
}

function displayBooks(book_array){

    const book = book_array.at(-1);
    const div = document.createElement('div');
    div.classList.add('card');

    div.classList.add('BookList');
    for(prop in book){            
        const p = document.createElement('p');
        const content = book[prop];
        switch(prop){
            case 'ChangeReadStatus':
                break;
            case 'title':
                let h3 = document.createElement('h3');
                h3.textContent = content;
                div.append(h3);
                break;
            case 'read':
                const button = document.createElement('button');
                button.addEventListener('click', ReadStatus);
                button.addEventListener('click', () => {
                    
                    const id_number = button.parentElement.dataset.indexNumber;
                    for(books of myLibrary){
                        if(book.id == id_number){ 
                              book.ChangeReadStatus();
                              break;
                     }      
                     }
                     
                });
                button.textContent = content ? 'Read' : 'Unread';
                button.classList.add('ReadStatus');
                button.classList.add(content ? 'read' : 'unread')
                div.append(button);
                break;
            case 'id':
                div.dataset.indexNumber = book[prop];
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
        const button = document.createElement('button');
        button.classList.add('RemoveBook');
        button.textContent = 'Delete';
        button.addEventListener('click', () => {
        const id_number = button.parentElement.dataset.indexNumber;
        for(books of myLibrary){
            if(book.id == id_number){ 
                myLibrary.splice(myLibrary.indexOf(book), 1);
                break;
            }
        }
        button.parentElement.remove();
        })
        div.append(button);
        
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

function ReadStatus(e){
    const target = e.target;
    if(target.textContent == 'Read') target.textContent = 'Unread';
    else target.textContent = 'Read';
    target.classList.toggle('read');
    target.classList.toggle('unread');
}

read.addEventListener('click', ReadStatus);

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