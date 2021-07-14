const router = require('express').Router();
const path = require('path');
const pool = require('../database/db.js');

//basic skeleton for queries
// TODO: reconfigure after writing schema for database
router.get('/topics/:id', (req, res) => {
  try {
    const id = req.params.id;
    pool.query('SELECT * FROM topics WHERE id = ?', [id], (err, rows) => {
      if (err) {
        res.status(500).send('Error');
      } else {
        res.send(rows[0]);
      }
    });
  } catch (e) {
    console.error(e.message);
    res.status(500).send('Error');
  }
});

export default router;
