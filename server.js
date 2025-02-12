require("dotenv").config(); // to configure access to environment variables in the .env file
const express = require("express"); // to create the server (express the javascript library that ensures communication with the server that is node.js server)

const mongoose = require("mongoose"); // to connect to MongoDB (mongoose is a library that allows you to interact with MongoDB)

const app = express(); // create the server app
app.use(express.json()); // to parse the body of the request as JSON

const cors = require("cors"); // to enable Cross-Origin Resource Sharing (CORS) in the server
app.use(cors()); // enable CORS in the server

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI) // connect to the MongoDB database using the URI stored in the .env file
    .then(() => console.log("MongoDB connected successfully")) // if the connection is successful, log a message to the console
    .catch(err => console.error("MongoDB connection error:", err)); // if the connection is unsuccessful, log an error message to the console

app.use("/books", require("./routes/bookRoutes")); // use the bookRoutes.js file to handle requests to the /books endpoint

const PORT = process.env.PORT || 3000; // set the port to the PORT environment variable if it is defined, otherwise set it to 3000
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`)); // start the server on the specified port and log a message to the console
