📌 LibSwap HD – Full Dockerised Application (Frontend + Backend + MongoDB)
SIT725 – Task 8.2HD: End‑to‑End Application Deployment

This submission demonstrates the fully Dockerised LibSwap application, including:

Frontend (Nginx + HTML/CSS/JS dashboard)

Backend (Node.js + Express API)

Database (MongoDB container)

Networking between all services

Environment variables

Custom /api/student endpoint

The entire application runs end‑to‑end inside Docker using docker-compose.

🚀 How to Run the Application
1️⃣ Create your .env file
(Not committed — protected by .gitignore)

Code
PORT=3000
MONGODB_URI=mongodb://mongo:27017/libswap
JWT_SECRET=LibSwap_JWT_Secret_2026_ChangeThisToRandomString
JWT_EXPIRES_IN=1d
2️⃣ Build and start all Docker containers
Run:

Code
docker-compose up --build
This starts:

frontend → Nginx serving LibSwap dashboard

backend → Node.js API

mongo → MongoDB database

All containers communicate through Docker’s internal network.

3️⃣ Access the application
Frontend Dashboard
http://localhost:8081
Shows the full LibSwap UI:

Header + branding

Sidebar navigation

Student info

Borrowed books

Reservations

Swap requests

Buttons + animations

Backend API
http://localhost:3000

Student API (HD requirement)
http://localhost:3000/api/student

Expected output:

json
{
  "name": "Pratham",
  "course": "Master of IT",
  "unit": "SIT725",
  "project": "LibSwap"
}
🧱 Containers Included
frontend (Nginx)
Serves index.html, style.css, dashboard.js

Communicates with backend via internal Docker network

Exposes port 8081

backend (Node.js + Express)
REST API

/api/student endpoint

Connects to MongoDB

Reads environment variables

Exposes port 3000

mongo (MongoDB)
Official MongoDB image

Persistent volume for data

Accessible via service name mongo

📦 Project Structure
Code
LibSwap-HD/
│ Dockerfile          (frontend)
│ Dockerfile.backend  (backend)
│ docker-compose.yml
│ .env.example
│ server.js
│ routes/
│ models/
│ public/             (frontend files)
│   index.html
│   style.css
│   dashboard.js
│ README.md
│ reflection.md
🔧 Environment Variables
Variable	Description
PORT	Port for Express server
MONGODB_URI	MongoDB connection string
JWT_SECRET	Secret key for JWT authentication
JWT_EXPIRES_IN	Token expiry duration


See .env.example for safe placeholders.

🐳 Docker Concepts Demonstrated
Dockerfile for frontend (Nginx)

Dockerfile for backend (Node.js)

Multi‑container setup using Docker Compose

Container networking (frontend ↔ backend ↔ mongo)

MongoDB persistence using volumes

Environment variable injection

Exposing ports

Building images using context

End‑to‑end deployment in a clean environment

🧪 Testing the Application
Frontend
Open:
http://localhost:8081

Backend
Code
GET /
Student API
Code
GET /api/student
Database‑backed features
Borrowed books

Reservations

Swap requests