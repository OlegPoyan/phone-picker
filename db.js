var mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'localhost',
  user: '',
  password: '',
  database: 'PhonePicker'
});

connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...');

  connection.query('SELECT * FROM Device', function(err, results) {
    if (err) throw err
    console.log(JSON.stringify(results,undefined,2));
  });
});
