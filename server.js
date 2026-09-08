const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');

require('dotenv').config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('LibSwap server is running');
});

// Student info route
app.get('/api/student', (req, res) => {
  res.json({
    name: "Pratham",
    course: "Master of IT",
    unit: "SIT725",
    project: "LibSwap"
  });
});

// Borrowed books (placeholder)
app.get('/api/books/borrowed', (req, res) => {
  res.json([
    { title: "The Pragmatic Programmer", author: "Andrew Hunt" },
    { title: "Clean Code", author: "Robert C. Martin" }
  ]);
});

// Reservations (placeholder)
app.get('/api/books/reservations', (req, res) => {
  res.json([
    { bookTitle: "Design Patterns", status: "Pending" },
    { bookTitle: "JavaScript: The Good Parts", status: "Approved" }
  ]);
});

// Swap requests (placeholder)
app.get('/api/swap', (req, res) => {
  res.json([
    { bookTitle: "Eloquent JavaScript", fromStudent: "John Doe" },
    { bookTitle: "You Don't Know JS", fromStudent: "Sarah Lee" }
  ]);
});

app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error('MongoDB connection failed:', error.message);
    });
