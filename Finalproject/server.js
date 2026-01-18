const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());
app.use(express.static("public"));

app.use(bodyParser.json());

// PostgreSQL connection
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'FinalProject',
  password: 'arasi',
  port: 5432,
});

/* =========================
   LOGIN ENDPOINT
========================= */






app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query(
      `
      SELECT *
      FROM users
      WHERE LOWER(TRIM(email)) = LOWER($1)
        AND TRIM(password) = $2
      `,
      [email.trim(), password.trim()]
    );

    if (result.rows.length > 0) {
      res.json({ success: true });
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

/* =========================
   RATES ENDPOINT
========================= */
app.get('/api/rates', async (req, res) => {
  const { origin, destination, incoterm } = req.query;

  try {
    const result = await pool.query(
      `
      SELECT cost_item, rate_per_mt
      FROM logistics_rates
      WHERE origin = $1
        AND destination = $2
        AND incoterm = $3
      `,
      [origin, destination, incoterm]
    );

    res.json(result.rows);
  } catch (err) {
    console.error('Rates query error:', err);
    res.status(500).json({ error: 'Failed to fetch rates' });
  }
});

/* =========================
   SERVER START
========================= */
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
