const books = [
    {
        title: "Book 1",
        description: "This is a description for book 1.",
        isbn: "1234567890",
        author: "Author 1",
        genre: "Genre 1",
        coverUrl: "images/rZung.webp"
    },
    {
        title: "Book 2",
        description: "This is a description for book 2.",
        isbn: "1234567899",
        author: "Author 2",
        genre: "Genre 2",
        coverUrl: "images/rZung.webp"
    },
    {
        title: "Book 3",
        description: "This is a description for book 3.",
        isbn: "1234567890",
        author: "Author 3",
        genre: "Genre 3",
        coverUrl: "images/rZung.webp"
    },
    {
        title: "Book 4",
        description: "This is a description for book 4.",
        isbn: "1234567899",
        author: "Author 4",
        genre: "Genre 4",
        coverUrl: "images/rZung.webp"
    }
];

const backListBooks = [
    {
        title: "Book 1",
        description: "This is a description for book 1.",
        isbn: "1234567890",
        author: "Author 1",
        genre: "Genre 1",
        coverUrl: "images/rZung.webp"
    },
    {
        title: "Book 2",
        description: "This is a description for book 2.",
        isbn: "1234567899",
        author: "Author 2",
        genre: "Genre 2",
        coverUrl: "images/rZung.webp"
    },
    {
        title: "Book 3",
        description: "This is a description for book 3.",
        isbn: "1234567890",
        author: "Author 3",
        genre: "Genre 3",
        coverUrl: "images/rZung.webp"
    },
    {
        title: "Book 4",
        description: "This is a description for book 4.",
        isbn: "1234567899",
        author: "Author 4",
        genre: "Genre 4",
        coverUrl: "images/rZung.webp"
    }
];

const bookContainer = document.getElementById("book-container");

books.forEach(book => {
    const bookDiv = document.createElement("div");
    bookDiv.className = "book";

    const bookCover = document.createElement("img");
    bookCover.className = "book-cover";
    bookCover.src = book.coverUrl;
    bookCover.alt = `Cover image for ${book.title}`;
    bookDiv.appendChild(bookCover);

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

    
})

const backListBookContainer = document.getElementById("backListBook-container");

backListBooks.forEach(book => {
    const bookDiv = document.createElement("div");
    bookDiv.className = "book";

    const bookCover = document.createElement("img");
    bookCover.className = "book-cover";
    bookCover.src = book.coverUrl;
    bookCover.alt = `Cover image for ${book.title}`;
    bookDiv.appendChild(bookCover);

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

    backListBookContainer.appendChild(bookDiv);
})