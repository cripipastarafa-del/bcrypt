'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const app         = express();
fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';
const bcrypt = require('bcrypt');

//START_ASYNC -do not remove notes, place code between correct pair of notes.
bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
  console.log(hash);
  bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
    console.log(res);
  });
});
//END_ASYNC

//START_SYNC
var hash = bcrypt.hashSync(myPlaintextPassword, saltRounds)
console.log("🔐 Hash síncrono:", hash)
//END_SYNC
var result = bcrypt.compareSync(myPlaintextPassword, hash)
console.log("✅ ¿Coincide?:", result)


























const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Useful Programmer Info Securyti App Started on PortListening on port:", PORT)
});
