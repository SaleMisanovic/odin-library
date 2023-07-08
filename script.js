let myLibrary = [];

function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = true;

    this.info = function () {
        if (read==true) {
            return title + " by " + author + ", " + pages + " pages, read."
        } else if(read==false){
            return title + " by " + author + ", " + pages + " pages, not read yet."
        }
    }
}

function addBookToLibrary(Book) {
    myLibrary.push(Book);
}

function populateBookshelf() {
    myLibrary.forEach(Book => {
        const shelf = document.querySelector("#bookshelf")
        const book = document.createElement('div');
        book.classList.add('book');
        shelf.appendChild(book);
    
        const title = document.createElement('p');
        title.classList.add('title');
        title.textContent = Book.title;
        book.appendChild(title);
    
        const author = document.createElement('p');
        author.classList.add('author');
        author.textContent = Book.author;
        book.appendChild(author);
    
        const pages = document.createElement('p');
        pages.classList.add('pages');
        pages.textContent = Book.pages;
        book.appendChild(pages);    

        const read = document.createElement('p');
        read.classList.add('read');
        read.textContent = Book.read;        
        book.appendChild(read);    
    });
}

const theHobbit = new Book("the hobbit","Jrr Tolkien",265,true)
const theWitcher = new Book("the Witcher","Andrzej Sapkowski",222,false)

addBookToLibrary(theHobbit);
addBookToLibrary(theWitcher);
console.log(myLibrary)
populateBookshelf();