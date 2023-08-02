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
    //title.classList.add("title");
    title.textContent = Book.title;
    book.appendChild(title);

    const author = document.createElement("p");
    //author.classList.add("author");
    author.textContent = Book.author;
    book.appendChild(author);

    const pages = document.createElement("p");
    //pages.classList.add("pages");
    pages.textContent = Book.pages + " pages";
    book.appendChild(pages);

    const read = document.createElement("button");
    //read.classList.add("read");
    if (Book.read=="true") {
      read.textContent = "Read";
    }else{
      read.textContent = "Not read";
    }
    book.appendChild(read);
    read.addEventListener("click",function () {
      updateRead(book.dataset.index)
    })

    book.setAttribute("data-index",myLibrary.indexOf(Book));

    const remove = document.createElement("button");
    remove.innerText = "Remove";
    book.appendChild(remove);
    remove.addEventListener("click",function () {
      deleteBook(book.dataset.index)
    })   

  });
  };

  function deleteBook(bookIndex) {
    myLibrary.splice(bookIndex,1)
    emptyBookshelf();
    populateBookshelf();
  }

  function updateRead(bookIndex) {
    if (myLibrary[bookIndex].read == "true") {
      myLibrary[bookIndex].read = "false"
    }else{
      myLibrary[bookIndex].read = "true";
    }    
    emptyBookshelf();
    populateBookshelf();
  }

function emptyBookshelf() {
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


const theHobbit = new Book("The Hobbit", "JRR Tolkien", 265, "true");
const theWitcher = new Book("The Witcher", "Andrzej Sapkowski", 222, "false");
const theWitcher1 = new Book("The Witcher1", "Andrzej Sapkowski", 222, "false");
const theWitcher2 = new Book("The Witcher2", "Andrzej Sapkowski", 222, "false");
const theWitcher3 = new Book("The Witcher3", "Andrzej Sapkowski", 222, "false");
const theWitcher4 = new Book("The Witcher4", "Andrzej Sapkowski", 222, "false");

addBookToLibrary(theHobbit);
addBookToLibrary(theWitcher);
addBookToLibrary(theWitcher1);
addBookToLibrary(theWitcher2);
addBookToLibrary(theWitcher3);
addBookToLibrary(theWitcher4);
populateBookshelf();
