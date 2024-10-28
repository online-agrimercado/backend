const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '201199201199',
    database: 'agrimercado'
});

db.connect(err => {
    if (err) {
        console.error('Database connection error:', err);
    } else {
        console.log('Connected to the database');
    }
});

app.get('/api/products', (req, res) => {
    db.query('SELECT * FROM products', (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Database query error' });
        } else {
            res.json(results);
        }
    });
});

app.get('/api/status', (req, res) => {
    res.json({ message: 'Server is running and connected to the database' });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
