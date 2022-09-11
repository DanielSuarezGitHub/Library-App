const addBook = document.querySelector('.addbook')
const modal = document.querySelector('dialog')
const closeModal = document.querySelector('.close')
const form = document.querySelector('#bookform')
const submit = document.querySelector('#submit')
const bookGrid = document.querySelector('.grid')
/* Controls modal open and close */
addBook.addEventListener('click', (e) => modal.showModal())
closeModal.addEventListener('click', (e) => modal.close())

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
  /* loop through the myLibrary array */
  for(let i = 0; myLibrary.length > i; i++ ) {
    /* add index */
    myLibrary[i].index = i
    /* create card elements */
    let card = document.createElement('div')
    let name = document.createElement('p')
    let auth = document.createElement('p')
    let pagecount = document.createElement('p')
    let bookRead = document.createElement('button')
    let removeBook = document.createElement('div')
    /* add classes for styling */
    card.classList.add('card')
    removeBook.setAttribute('id', i)
    bookRead.setAttribute('id', i)
    removeBook.classList.add('removeBook')
    bookRead.classList.add('readButton')
    /* add elements to dom */
    bookGrid.appendChild(card)
    card.appendChild(removeBook)
    card.appendChild(name)
    card.appendChild(auth)
    card.appendChild(pagecount)
    card.appendChild(bookRead)
    /* add text content to dom elements */
    name.textContent = myLibrary[i].title
    auth.textContent = myLibrary[i].author
    removeBook.textContent = "x"
    pagecount.textContent = myLibrary[i].pages
    bookRead.textContent = "Read?"
    /* add read class */
    if (myLibrary[i].read == true) {
      bookRead.classList.add('read')
    }
    addEventListeners()
  }
}

function addEventListeners() {
  let removeBook = document.querySelectorAll('.removeBook')
  removeBook.forEach((button) => {
   button.removeEventListener('click', bookremove)
   button.addEventListener('click', bookremove)
  })
  let bookRead = document.querySelectorAll('.readButton')
  bookRead.forEach((button) => {
    button.removeEventListener('click', booktoggleread)
    button.addEventListener("click", booktoggleread)
  })
 }

addBookToLibrary("The Hobbit", "J. R. R. Tolkien", "304", true)
addBookToLibrary("Harry Potter", "JK Rowling", "304", false)
addBookToLibrary("Beloved", "Toni Morrison", "567", true)
addBookToLibrary("Catch 22", "Joseph Heller", "576", true)

function bookremove(event) {
  let index = event.target.id
  myLibrary.splice(index, 1)
  displayBook()
}

Book.prototype.toggleread = function() {
  if(this.read == true) {
    this.read = false
  } else {
    this.read = true
  }
}

function booktoggleread(event) {
  let index = event.target.id
  myLibrary[index].toggleread()
  displayBook()
}




