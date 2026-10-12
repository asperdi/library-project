const myLibrary = [];
const library = document.querySelector(".library");
const add_book = document.querySelector(".AddBookDialog");

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

add_book.addEventListener('click', () => {
    addBookToLibrary(['O zaletach ignorancji czyli o zaletach ignorancji, czyli co my tak właściwie robimy', 'b', 300, true]);
    displayBooks(myLibrary);
});
