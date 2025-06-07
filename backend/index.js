const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// ✅ MySQL Connection Setup
const db = mysql.createConnection({
  host: 'srv1876.hstgr.io',
  user: 'u974273778_payroll_user',
  password: 'PayrollManagementSystem@1',
  database: 'u974273778_payroll_db',
  port: 3306
});

db.connect((err) => {
  if (err) {
    console.error('DB connection failed:', err);
  } else {
    console.log('Connected to MySQL database.');
  }
});

// ✅ Login Route
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const query = "SELECT * FROM users WHERE username = ? AND password = ?";
  db.query(query, [username, password], (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Database error" });
    }
    if (results.length > 0) {
      return res.status(200).json({ message: "Login successful", user: results[0] });
    } else {
      return res.status(401).json({ message: "Invalid credentials" });
    }
  });
});

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});