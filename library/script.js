const myLibrary = [];
const newBookbtn = document.querySelector("#new-book-btn");
const newBookForm = document.querySelector("#form-container")


newBookbtn.addEventListener("click", toggleForm);

function toggleForm() {
    newBookForm.classList.toggle("show");
}

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // take params, create a book then store it in the array
}

