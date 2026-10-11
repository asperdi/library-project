const myLibrary = [];
const library = document.querySelector(".library");

function Book(author, title, number_of_pages, read){
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
    const div = document.createElement('div');
    div.classList.add('BookList');

    for(book of book_array){
        for(prop in book){
            switch(prop){
                case 'title':
                    let h3 = document.createElement('h3');
                    h3.textContent = book[prop];
                    div.append(h3);
                    break;
                case 'read':
                     const par = document.createElement('p');
                     par.textContent = book[prop] ? 'Read' : 'Unread';
                     div.append(par);
                     break;
                case 'id':
                    break;
                default:
                     const p = document.createElement('p');
                     p.textContent = book[prop];
                     div.append(p);
                     break;

            }
        }
    }

    library.append(div);
}

addBookToLibrary(['Kroniki', 'Gall Anonim', 400, false]);
addBookToLibrary(['Hobbit','Tolkien',  300, true]);
addBookToLibrary([ 'LOTR','Tolkien',  1200, true]);


displayBooks(myLibrary);