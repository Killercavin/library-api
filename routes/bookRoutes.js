const express = require("express"); // to create the server (express the javascript library that ensures communication with the server that is node.js server)
const router = express.Router(); // create a router to handle requests to the /books endpoint
const Book = require("../models/book"); // import the Book model to interact with the book collection in the MongoDB database

// Fetch all books
router.get("/", async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Add a new book
router.post("/", async (req, res) => {
    try {
        const newBook = new Book(req.body);
        await newBook.save();
        res.status(201).json(newBook);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Update book availability
router.put("/:id", async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, { availability: req.body.availability }, { new: true });
        if (!updatedBook) return res.status(404).json({ message: "Book not found" });
        res.json(updatedBook);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete a book
router.delete("/:id", async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);
        if (!deletedBook) return res.status(404).json({ message: "Book not found" });
        res.json({ message: "Book deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router; // export the router for use in other files
// The bookRoutes.js file defines a router to handle requests to the /books endpoint. It includes routes to fetch all books, add a new book, update book availability, and delete a book. The router uses the Book model to interact with the book collection in the MongoDB database. The router is then exported for use in other files, typically in conjunction with the server.js file to handle CRUD operations for books in the database
