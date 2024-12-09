const express = require('express');
const connection = require('../db/connections');
const router = express.Router();

router.get('/', (req, res) => {
 connection.query('SELECT * FROM mahasiswa', (err, result) => {
  if (err) {
   console.error('Gagal mengambil data mahasiswa', err);
   res.status(500).json({ error: 'Internal Server Error' });
  } else {
   res.json(result);
  }
 });
});

module.exports = router;