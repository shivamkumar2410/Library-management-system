# Library_Management_System

## Overview

The Library Management System is a web application designed to manage the operations of a library, including managing books, members, and loans.

## Features

- Add, update, delete, and view books
- Add, update, delete, and view members
- Create, update, delete, and view loans

## Technologies Used

- Backend: Node.js, Express.js
- Database: MongoDB
- Frontend: React.js

## Installation

1. Clone the repository:
   git clone https://github.com/shivamkumar2410/Library-management-system
   
2. Navigate to the project directory:
   bash
   cd Library_Management_System
   
3. Install dependencies:
   bash
   npm install
   

## Running the Application

1. Start the backend server:
   bash
   npm run server
   
2. Start the frontend development server:
   bash
   npm start
   

## API Endpoints

### Books

- *GET /api/books*: Retrieve a list of all books.
- *GET /api/books/{id}*: Retrieve details of a specific book by ID.
- *POST /api/books*: Add a new book.
- *PUT /api/books/{id}*: Update details of a specific book by ID.
- *DELETE /api/books/{id}*: Delete a specific book by ID.

## License

This project is licensed under the MIT License.
