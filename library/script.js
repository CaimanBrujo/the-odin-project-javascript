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
    
    displayBooks();
}

const form = document.querySelector("#new-book-form");
form.addEventListener("submit", function(e) {
    e.preventDefault();
    addBookToLibrary();
    form.reset();
    formContainer.classList.remove("show");
});

function displayBooks() {
    const libraryDisplay = document.querySelector("#library-display");
    libraryDisplay.innerHTML = "";

    myLibrary.forEach((book, i) => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");

        bookCard.innerHTML =
        `<h3 class="book-title">${book.title}</h3>
        <p class="book-author"><strong>Author:</strong> ${book.author}</p>
        <p class="book-pages"><strong>Pages:</strong> ${book.pages}</p>
        <p class="book-read"><strong>Read:</strong> ${book.read ? "Yes" : "No"}</p>`;


        libraryDisplay.appendChild(bookCard);
    });
}
