const myPlaintextPassword = "password";
const bcrypt = require('bcrypt');
const colors = require('colors');

bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
        console.log(hash.green);
        // Store hash in your password DB.
    });
});