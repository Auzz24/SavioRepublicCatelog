const books = [
    {
        title: "Book 1",
        description: "This is a description for book 1.",
        isbn: "1234567890",
        author: "Author 1",
        genre: "Genre 1",
    },
    // Add more book objects here
];

const bookContainer = document.getElementById("book-container");

books.forEach(book => {
    const bookDiv = document.createElement("div");
    bookDiv.className = "book";

    const bookTitle = document.createElement("h2");
    bookTitle.className = "book-title";
    bookTitle.textContent = book.title;
    bookDiv.appendChild(bookTitle);

    const bookDescription = document.createElement("p");
    bookDescription.className = "book-details";
    bookDescription.textContent = `Description: ${book.description}`;
    bookDiv.appendChild(bookDescription);

    const bookISBN = document.createElement("p");
    bookISBN.className = "book-details";
    bookISBN.textContent = `ISBN: ${book.isbn}`;
    bookDiv.appendChild(bookISBN);

    const bookAuthor = document.createElement("p");
    bookAuthor.className = "book-details";
    bookAuthor.textContent = `Author: ${book.author}`;
    bookDiv.appendChild(bookAuthor);

    const bookGenre = document.createElement("p");
    bookGenre.className = "book-details";
    bookGenre.textContent = `Genre: ${book.genre}`;
    bookDiv.appendChild(bookGenre);

    bookContainer.appendChild(bookDiv);
});