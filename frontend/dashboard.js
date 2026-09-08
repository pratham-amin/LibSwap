const API_BASE = "http://localhost:3000";

// Load student info
fetch(`${API_BASE}/api/student`)
  .then(res => res.json())
  .then(data => {
    document.getElementById("student-details").innerHTML = `
      <p>Name: ${data.name}</p>
      <p>Course: ${data.course}</p>
      <p>Unit: ${data.unit}</p>
      <p>Project: ${data.project}</p>
    `;
  })
  .catch(err => console.error("Student API error:", err));


// Borrowed Books (placeholder route)
fetch(`${API_BASE}/api/books/borrowed`)
  .then(res => res.json())
  .then(books => {
    const list = document.getElementById("borrowed-list");
    books.forEach(book => {
      list.innerHTML += `<li>${book.title} by ${book.author}</li>`;
    });
  })
  .catch(() => {
    document.getElementById("borrowed-list").innerHTML =
      "<li>No borrowed books found</li>";
  });


// Reservations (placeholder route)
fetch(`${API_BASE}/api/books/reservations`)
  .then(res => res.json())
  .then(reservations => {
    const list = document.getElementById("reservation-list");
    reservations.forEach(r => {
      list.innerHTML += `<li>${r.bookTitle} — Status: ${r.status}</li>`;
    });
  })
  .catch(() => {
    document.getElementById("reservation-list").innerHTML =
      "<li>No reservations found</li>";
  });


// Swap Requests (placeholder route)
fetch(`${API_BASE}/api/swap`)
  .then(res => res.json())
  .then(swaps => {
    const list = document.getElementById("swap-list");
    swaps.forEach(s => {
      list.innerHTML += `<li>${s.bookTitle} — Request from: ${s.fromStudent}</li>`;
    });
  })
  .catch(() => {
    document.getElementById("swap-list").innerHTML =
      "<li>No swap requests found</li>";
  });
