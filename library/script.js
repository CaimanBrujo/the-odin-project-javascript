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
        bookCard.dataset.index = i;

        bookCard.innerHTML =
        `<div class="card-header">
            <button class="delete-btn" data-index="${i}">✖</button>
            <h3 class="book-title">Book: ${book.title}</h3>
        </div>
        <p class="book-author"><strong>Author:</strong><br>${book.author}</p>
        <p class="book-pages"><strong>Number of Pages:</strong><br>${book.pages}</p>
        <p class="book-read"><strong>Read:</strong><br>${book.read ? "Yes" : "No"}</p>
        <button class="toggle-read-btn" data-index="${i}">
            ${book.read ? "Mark as Unread" : "Mark as Read"}
        </button>`;

        const deleteBtn = bookCard.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", deleteBook);

        const toggleBtn = bookCard.querySelector(".toggle-read-btn");
        toggleBtn.addEventListener("click", toggleReadStatus);

        libraryDisplay.appendChild(bookCard);
    });
}

function deleteBook(e) {
    const index = e.target.dataset.index;
    myLibrary.splice(index, 1);
    displayBooks();
}

function toggleReadStatus(e) {
    const index = e.target.dataset.index;
    myLibrary[index].read = !myLibrary[index].read;
    displayBooks();
}

