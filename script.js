const myLibrary = [];
const library = document.querySelector(".library");

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

    for(book of book_array){
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

}

addBookToLibrary(['Kroniki', 'Gall Anonim', 400, false]);
addBookToLibrary(['Hobbit','Tolkien',  300, true]);
addBookToLibrary([ 'The count of monte cristo','Tolkien',  1200, true]);


displayBooks(myLibrary);