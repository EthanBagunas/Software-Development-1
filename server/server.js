var con = require('./connection');
var express  = require('express');
var app = express();
var cors= require('cors')

const multer = require('multer');

app.use(cors());
app.use(express.urlencoded({
  extended: false, // Whether to use algorithm that can handle non-flat data strutures
  limit: 10000, // Limit payload size in bytes
  parameterLimit: 1000, // Limit number of form items on payload
}));


app.post('/upload', function(req, res) {

  const date= req.body.date;
  const name = req.body.name;
  const address=req.body.address;
  const age = req.body.age;
  const species = req.body.species;
  const petname = req.body.petname;
  const breed = req.body.breed;
  const gender = req.body.gender;
  const size = req.body.size;
  const email = req.body.email;
  const mno= req.body.mno;
  
  const insertQuery = "INSERT INTO pet_db(date, name, address, age, species, petname, breed, gender, size, email, mno) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  con.query(insertQuery,[date, name, address, age, species, petname, breed, gender, size, email, mno] , (err, result) => {
    if (err) {
      console.error('Error inserting data: ', err);
      return;
    }
    console.log('Data inserted successfully!');
    console.log('Inserted ID: ', result.insertId);
  });


  // { firstName: 'Barry', lastName: 'Manilow' }

});


const port = 7000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


/*
var multer =require("multer");
const storage = multer.memoryStorage(); 
const upload =multer({ storage:multer.memoryStorage()});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/register.html')); // currently register.html
  });

app.post('/upload',upload.single('petpic') ,function(req,res){
    const date= req.body.date;
    const name = req.body.name;
    const address=req.body.address;
    const age = req.body.age;
    const petpic = req.file.buffer;
    const species = req.body.species;
    const petname = req.body.petname;
    const breed = req.body.breed;
    const gender = req.body.gender;
    const size = req.body.size;
    const email = req.body.email;
    const mno= req.body.mno;

    con.connect(function (error) {
        if (error) throw error;
        const sql = "INSERT INTO checking(date, name, address, age, petpic, species, petname, breed, gender, size, email, mno) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        con.query(sql, [date, name, address, age, petpic, species, petname, breed, gender, size, email, mno], function (error, result) {
            if (error) throw error;
            res.send('<script>alert("Information Registered Successfully, Redirecting to dashboard..."); window.location.href = "http://localhost:5500/HomePage/homein.html";</script>'); 
        });
    });
});
*/