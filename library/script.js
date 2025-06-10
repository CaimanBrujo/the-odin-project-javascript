const myLibrary = [];
const newBookbtn = document.querySelector("#new-book-btn");
const newBookForm = document.querySelector("#form-container")


newBookbtn.addEventListener("click", toggleForm);

function toggleForm() {
    newBookForm.classList.toggle("show");
}

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#read").checked;

    const newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook);
    console.log(myLibrary)
}

const form = document.querySelector("#new-book-form");
form.addEventListener("submit", function(e) {
    e.preventDefault();
    addBookToLibrary();
    form.reset();
    formContainer.classList.remove("show");
});