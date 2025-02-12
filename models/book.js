const mongoose = require("mongoose"); // to interact with MongoDB (mongoose is a library that allows you to interact with MongoDB)

// Define the schema for the book collection
const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    ISBN: String,
    genre: String,
    availability: { type: Boolean, default: true }
});

// Create a model for the book collection using the schema
const Book = mongoose.model("Book", bookSchema);

module.exports = Book; // export the Book model for use in other files
// The book.js file defines a schema for the book collection and creates a model for interacting with the collection. The model is then exported for use in other files. This allows other files to interact with the book collection in the MongoDB database. The book.js file is typically used in conjunction with the bookRoutes.js file to handle CRUD operations for books in the database.
