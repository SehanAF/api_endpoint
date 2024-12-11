const express = require('express');
const bodyParser = require('body-parser');

const mahasiswaRouter = require('./routes/mahasiswa');
const dosenRouter = require('./routes/dosen');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/mahasiswa', mahasiswaRouter); 
app.use('/dosen', dosenRouter);

app.listen(PORT, function () {
 console.log(`Server berjalan di http://localhost:${PORT}`);
}); 