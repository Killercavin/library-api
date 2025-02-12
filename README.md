# 📚 Library API  

## 📝 Using MongoDB and Node.js for Developing REST Servicess  

### **📌 Overview**  
This project is a **REST API** built using **Node.js, Express, and MongoDB**, allowing users to manage a book collection. It supports **CRUD operations**, including adding books, retrieving available books, updating book availability, and deleting books.  

---

## **🚀 Setup & Installation**  
Follow these steps to set up and run the API locally. 

### **1️⃣ Unzip the assignment solution file and change directory to the library-api folder**
``
cd library-api 
``

### **2️⃣ Install Dependencies**
Run the following command to install the dependencies required for the project: If you have npm already installed, you can run the following command to install the dependencies required for the project .If not, download and install Node.js from [nodejs.org](https://nodejs.org/en/download/).

``
npm install`` or
``
npm i``

### **3️⃣ Set Up MongoDB**
Ensure you have MongoDB running locally or use a cloud database like MongoDB Atlas. If not download and install MongoDB from [mongodb.com](https://www.mongodb.com/try/download/community) and follow the instructions to set up a local MongoDB instance.

- If using local MongoDB, start it with:

``mongod
`` or 
``mongod --dbpath /path/to/data/db``

- Update .env with your MongoDB connection string:

``
MONGO_URI=MONGO_URI=mongodb://localhost:27017/LibraryDB 
``

`` PORT=3000 
`` 
port from which the server will run at, replace with your favourite port

- Configure the MONGO_URI with your valid MongoDB cluster URI example below if you prefer using MongoDB Cloud Atlas

``MONGO_URI=mongodb+srv://<username>:<password>@libraryapi.tcgai.mongodb.net/?retryWrites=true&w=majority&appName=LibraryAPI
``

### **4️⃣ Start the Server**
Start the server

``npm start`` or 
``npm run start``

### **📡 API Endpoints & Testing**
Use Postman or cURL to test the API endpoints.

| **Method** | **Endpoint** | **Description** |
|------------|-------------|----------------|
| **GET** | `/books` | Fetch all books |
| **GET** | `/books/available` | Fetch only available books |
| **POST** | `/books` | Add a new book |
| **PUT** | `/books/:id/checkout` | Mark a book as checked out |
| **DELETE** | `/books/:id` | Delete a book |

#### **🧪 Example Requests**

**✅ Fetch All Books**

``curl -X GET http://localhost:3000/books``

**✅ Add a Book**

``curl -X POST http://localhost:3000/books -H "Content-Type: application/json" -d '{
  "title": "The Alchemist",
  "author": "Paulo Coelho",
  "ISBN": "9780061122415",
  "genre": "Adventure",
  "availability": true
}'
``

**✅ Delete a Book**

``curl -X DELETE http://localhost:3000/books/{book_id}
``

**✅ Update a Book**

``curl -X PUT http://localhost:3000/books/<BOOK_ID> -H "Content-Type: application/json" -d '{
  "availability": false
}'
``


## 📂 Project Structure

```
📦 library-api
├── 📁 routes
│   ├── bookRoutes.js
├── 📁 models
│   ├── Book.js
├── server.js
├── package.json
├── .gitignore
├── .env
├── pnpm-lock.yaml
└── README.md
```
