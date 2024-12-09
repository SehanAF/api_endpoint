const mysql = require('mysql2');

const connection = mysql.createConnection({
 host: 'localhost',
 user: 'root',
 password: '',
 database: 'db_sehan_ti23a'
}); 

// db.getConnection((err, connection) => {
//     if (err) {
//         console.error('Error connecting to database:', err);
//     } else {
//         console.log('Connected to database');
//         connection.release();
//     }
// });

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
    } else {
        console.log('Connected to database');
    }
});


module.exports = connection;