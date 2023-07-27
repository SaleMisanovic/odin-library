let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(Book) {
  myLibrary.push(Book);
}

const shelf = document.querySelector("#bookshelf");

function populateBookshelf() {
  myLibrary.forEach(Book => {
    const book = document.createElement("div");
    book.classList.add("book");
    shelf.appendChild(book);

    const title = document.createElement("p");
    title.classList.add("title");
    title.textContent = Book.title;
    book.appendChild(title);

    const author = document.createElement("p");
    author.classList.add("author");
    author.textContent = Book.author;
    book.appendChild(author);

    const pages = document.createElement("p");
    pages.classList.add("pages");
    pages.textContent = Book.pages;
    book.appendChild(pages);

    const read = document.createElement("p");
    read.classList.add("read");
    read.textContent = Book.read;
    book.appendChild(read);
  });
  };

function emptyBookshelf(param) {
  shelf.innerHTML = "";
}

function openForm() {
  document.getElementById("book_popup").style.display = "block";
}

function closeForm() {
  document.getElementById("book_popup").style.display = "none";
}

function isInLibrary(newBook) {
  return myLibrary.some((Book)=> Book.title === newBook.title)
}

const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const myFormData = new FormData(e.target);


  const formDataObj = Object.fromEntries(myFormData.entries());
  const newBook = new Book(
    formDataObj.title,
    formDataObj.author,
    formDataObj.pages,
    formDataObj.read,
  );

  if (isInLibrary(newBook)) {
   alert("this book is already in library") 
  }else{
    addBookToLibrary(newBook);
    console.log(newBook)
  
    emptyBookshelf();
    populateBookshelf();
  }


});


const theHobbit = new Book("the hobbit", "Jrr Tolkien", 265, true, false);
const theWitcher = new Book("the Witcher", "Andrzej Sapkowski", 222, false, false);

addBookToLibrary(theHobbit);
addBookToLibrary(theWitcher);
populateBookshelf();
