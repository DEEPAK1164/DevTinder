# DevTinder - MERN Stack Application

**DevTinder** is a social networking application built using the MERN stack (MongoDB, Express, React, Node.js), designed to allow users to connect, sign up, log in, and interact with each other. The application implements secure authentication using **bcryptjs** for hashing passwords and integrates internal Node.js concepts like routing, middleware, and authentication.

---

## Technologies Used

- **MongoDB** - NoSQL database for storing user data and interactions.
- **Express.js** - Web framework for Node.js to handle routing and HTTP requests.
- **React** - Frontend library for building dynamic user interfaces.
- **Node.js** - Server-side JavaScript runtime.
- **bcryptjs** - Library for hashing passwords securely.
- **JWT (JSON Web Tokens)** - Token-based authentication for secure user sessions.
- **Axios** - HTTP client for making requests to the backend.

---

## Features

- **User Registration**: Users can register with their email, username, and password.
- **User Login**: Secure login with JWT authentication and hashed passwords.
- **User Profiles**: Users can create and update their profiles.
- **Password Encryption**: Passwords are securely hashed using bcryptjs before storage.
- **Feed**: Display user posts and interactions.
- **Social Connections**: Ability to connect and disconnect with other users.
- **Routing and Authentication**: Protected routes using JWT authentication middleware.

---

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [npm](https://www.npmjs.com/)

---

## Installation

### 1. Clone the repository
```bash
git clone https://github.com/DEEPAK1164/DevTinder.git
cd DevTinder

## Backend Setup
- cd dev-tinder
- npm install
- nodemon src/app.js

## Frontend Setup
- cd dev-tinder-web
- npm install
- npm run dev



