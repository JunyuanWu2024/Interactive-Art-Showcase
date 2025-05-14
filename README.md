# 🪨 Moss and Stones - Full Stack Web Project 

## 📌 Project Overview
This is a full-stack web application developed for COMP4621. It showcases a nature-inspired theme titled **"Moss and Stones"**, combining frontend aesthetics with backend functionality. The site includes user login/registration, responsive design, and multi-page navigation.

## 🔧 Tech Stack

- **Frontend**: HTML, CSS, AngularJS
- **Backend**: Node.js + Express
- **Database**: MongoDB
- **Design tools**: Figma (used for layout planning)

## 📁 Folder Structure
project-folder/
├── public/
│ ├── home.html
│ ├── login.html
│ ├── about.html
│ ├── main.html
│ ├── img/
│ └── fonts/
├── loginController.js
├── server.js
├── users.js
├── globals.css
├── home-style.css
├── login-style.css
├── main-style.css
├── about-style.css
└── README.md

## ✅ Key Features

### 🧩 Part 1 – MongoDB Setup
- Database: `assignment3db`, Collection: `users`
- User documents include `username`, `email`, `password`, `fullname`
- Verified via `mongosh`

### 💻 Part 2 – AngularJS Login
- Users can log in using username or email
- New users auto-register if no match found
- Handled by `loginController.js` using `$http.post`

### 🎨 Part 3 – Static Pages
- `home.html`: Entry point, animated typography, background image
- `login.html`: AngularJS form
- `main.html`: Post-login landing page with image layout
- `about.html`: Creator introduction

### 🌐 Part 4 – Full Stack Integration
- `server.js`: Handles authentication and user creation
- Express serves static content and parses POST requests
- Successful login redirects to `main.html`

## 🧪 How to Run Locally
1. Start MongoDB (`mongod`)
2. Install dependencies:
   ```bash
   npm install express mongodb body-parser cors

   Insert users:
          node users.js
   Launch the server:
          node server.js
   Open:
          http://localhost:3000/home.html

### 📝 Final Reflection
This project deepened my understanding of full-stack web development. Key challenges included:

- Setting up and connecting to MongoDB

- Designing responsive layouts across multiple pages

- Handling conditional logic in login and auto-registration flows

I overcame these difficulties through documentation review, layout iteration in Figma, and hands-on debugging.
This project helped me gain confidence in building practical full-stack applications from scratch.


