const express = require('express');

const mahasiswaRouter = require('./routes/mahasiswa');
// const dosenRouter = require('./routes/dosen');

const app = express();
const PORT = 3000;

app.use('/mahasiswa', mahasiswaRouter); 

app.listen(PORT, function () {
 console.log(`Server berjalan di http://localhost:${PORT}`);
}); 