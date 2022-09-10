const addBook = document.querySelector('.addbook')
const modal = document.querySelector('dialog')
const close = document.querySelector('.close')
const form = document.querySelector('#bookform')
const submit = document.querySelector('#submit')
const bookGrid = document.querySelector('.grid')
/* Controls modal open and close */
addBook.addEventListener('click', (e) => modal.showModal())
close.addEventListener('click', (e) => modal.close())

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author
  this.pages = pages
  this.read = read
}

function addBookToLibrary(title, author, pages, read) { 
  myLibrary.push(new Book(title, author, pages, read))
  displayBook()
}

function displayBook() {
  /* reset the grid */
  bookGrid.innerHTML = ""
  for(let i = 0; myLibrary.length > i; i++ ) {
    let card = document.createElement('div')
    let name = document.createElement('p')
    let auth = document.createElement('p')
    let pagecount = document.createElement('p')
    let bookRead = document.createElement('button')
    let removeBook = document.createElement('div')
    removeBook.textContent = "x"
    bookGrid.appendChild(card)
    card.appendChild(removeBook)
    card.classList.add('card')
    card.appendChild(name)
    card.appendChild(auth)
    card.appendChild(pagecount)
    card.appendChild(bookRead)
    name.textContent = myLibrary[i].title
    auth.textContent = myLibrary[i].author
    pagecount.textContent = myLibrary[i].pages
    bookRead.textContent = "Read?"
    if (myLibrary[i].read == true) {
      bookRead.classList.add('read')
    }
  }
}

addBookToLibrary("The Hobbit", "J. R. R. Tolkien", "304", false)
addBookToLibrary("Harry Potter", "JK Rowling", "304", true)
