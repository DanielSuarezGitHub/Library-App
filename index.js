const newBook = document.querySelector('.newbook')
const modal = document.querySelector('dialog')
const close = document.querySelector('.close')

newBook.addEventListener('click', (e) => modal.showModal())
close.addEventListener('click', (e) => modal.close())