document.addEventListener("DOMContentLoaded", function() {
    const books = [
        { title: "The Catcher in the Rye", author: "J.D. Salinger", image: "images/image1.jpg" },
        { title: "To Kill a Mockingbird", author: "Harper Lee", image: "images/image3.jpg" },
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald", image: "images/image4.jpg" },
        { title: "Moby-Dick", author: "Herman Melville", image: "images/image5.jpg" },
        { title: "Pride and Prejudice", author: "Jane Austen", image: "images/image6.jpg" },
        { title: "Brave New World", author: "Aldous Huxley", image: "images/image7.jpg" },
        { title: "The Hobbit", author: "J.R.R. Tolkien", image: "images/image8.jpg" },
        { title: "Crime and Punishment", author: "Fyodor Dostoevsky", image: "images/image10.jpg" },
        { title: "The Lord of the Rings", author: "J.R.R. Tolkien", image: "images/image11.jpg" },
        { title: "The Alchemist", author: "Paulo Coelho", image: "images/image12.jpg" },
        { title: "War and Peace", author: "Leo Tolstoy", image: "images/image13.jpg" },
        { title: "The Odyssey", author: "Homer", image: "images/image14.jpg" },
        { title: "Dracula", author: "Bram Stoker", image: "images/image15.jpg" },
        { title: "Jane Eyre", author: "Charlotte Brontë", image: "images/image16.jpg" },
        { title: "Frankenstein", author: "Mary Shelley", image: "images/image17.jpg" },
        { title: "The Picture of Dorian Gray", author: "Oscar Wilde", image: "images/image18.jpg" },
        { title: "The Shining", author: "Stephen King", image: "images/image19.jpg" },
        { title: "Dune", author: "Frank Herbert", image: "images/image20.jpg" }
    ];

    const bookList = document.getElementById("book-list");

    books.forEach(book => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");

        bookDiv.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <h2>${book.title}</h2>
            <p><strong>Author:</strong> ${book.author}</p>
        `;

        bookList.appendChild(bookDiv);
    });
});