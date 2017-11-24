const {SHA256} = require('crypto-js');
//const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = 'hola';

// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash);
//   });
// });

var hashedPassword = '$2a$10$N1FhPpmAzqr5pUSzxicl4OdL0FZdhcCIeN3XMRbzGFZm23BJScYjW';

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
});
//
// var data = {
//   id: 10
// };
//
// var token = jwt.sign(data, '123abc');
// console.log(token);
//
// var decoded = jwt.verify(token, '123abc');
// console.log('decoded', decoded);
//

// var message = 'I am user number 3';
// var hash = SHA256(message).toString();
//
// console.log(message);
// console.log(`Hash: ${hash}`);
//
// var data = {
//   id: 4
// };
//
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };
//
//
// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(data)).toString();
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
// if(resultHash === token.hash){
//   console.log('DAta was not changed');
// } else {
//   console.log('DAta was changed, NOT TRUST');
// }
