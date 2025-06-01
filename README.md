# 📝 Task Manager API

A RESTful API for managing tasks with full **JWT authentication** and **user-specific access**. Built using **Node.js**, **Express**, and **MongoDB**.

---

## 🔗 Where You Can Host
> _You can add your deployed URL here (e.g., Render, Railway, Vercel)_

---

## 🚀 Features

- ✅ User Registration & Login (JWT)
- 🔒 Password hashing using bcrypt
- 🔐 Secure route protection middleware
- 📋 Create, Read, Update, Delete (CRUD) tasks
- 🔎 Filter tasks by status
- 👥 User-specific task isolation
- 📁 Modular MVC structure

---

## 📦 Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- JSON Web Token (JWT)
- bcrypt.js
- dotenv

---

## ⚙️ Installation & Setup

```bash
# 1. Clone repo
git clone https://github.com/swastik-mohanty/task-manager-api
cd task-manager-api

# 2. Install dependencies
npm install

# 3. Create .env file
touch .env

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
JWT_EXPIRE=30d
```

