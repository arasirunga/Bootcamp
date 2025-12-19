const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Create PostgreSQL connection pool  
const pool = new Pool({
  user: 'postgres',        // your PostgreSQL username
  host: 'localhost',       // database host
  database: 'parking_system', // your database name
  password: 'arasi',   // your PostgreSQL password
  port: 5432,              // default PostgreSQL port
});




// Login endpoint
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log('Login attempt:', {
  emailReceived: email,
  passwordReceived: password
});



  try {
    const result = await pool.query(
  'SELECT * FROM users WHERE LOWER(TRIM(email)) = LOWER($1) AND TRIM(password) = $2',
  [email.trim(), password.trim()]
);
console.log('Query result:', result.rows);



    if (result.rows.length > 0) {
      res.json({ success: true });
    } 
    else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }


  }
  catch (err) {
    console.error('Database error:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }

console.log('Result rows:', result.rows);


});


app.get('/slots', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM parking_slots ORDER BY slot_number');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching slots:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// 2️⃣ Book a parking slot (restrict to one booking per user per day)
app.post('/book-slot', async (req, res) => {
  const { slot_number, email } = req.body;

  try {
    // Check if user already booked a slot today
    const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD

    const existingBooking = await pool.query(
      'SELECT * FROM parking_slots WHERE booked_by = $1 AND booking_date = $2',
      [email, today]
    );

    if (existingBooking.rows.length > 0) {
      return res.status(400).json({ message: 'You have already booked a slot today.' });
    }

    // Check if slot exists and is available
    const check = await pool.query('SELECT * FROM parking_slots WHERE slot_number = $1', [slot_number]);
    if (check.rows.length === 0) {
      return res.status(404).json({ message: 'Slot not found' });
    }
    if (check.rows[0].is_booked) {
      return res.status(400).json({ message: 'Slot already booked.' });
    }

    // Book slot
    await pool.query(
      'UPDATE parking_slots SET is_booked = TRUE, booked_by = $1, booking_date = $2 WHERE slot_number = $3',
      [email, today, slot_number]
    );

    res.json({ message: `Slot ${slot_number} booked successfully!` });
  } catch (err) {
    console.error('Error booking slot:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// 3️⃣ (Optional) Unbook slot
app.post('/unbook-slot', async (req, res) => {
  const { slot_number } = req.body;
  try {
    await pool.query(
      'UPDATE parking_slots SET is_booked = FALSE, booked_by = NULL, booking_date = NULL WHERE slot_number = $1',
      [slot_number]
    );
    res.json({ message: `Slot ${slot_number} is now available again.` });
  } catch (err) {
    console.error('Error unbooking slot:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
