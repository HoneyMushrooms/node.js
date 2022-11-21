// const dotenv = require('dotenv');
// dotenv.config();
require("dotenv").config();

process.on('beforeExit', (code) => {
    console.log('Process beforeExit event with code: ', code);
  });

process.on('exit', (code) => {
  console.log('Process exit event with code: ', code);
});

console.log('This message is displayed first.');
 
console.log(process.pid)

console.log(process.env.PORT)
console.log(process.env.NODE_ENV)

console.log(process.argv)


if(Math.random() > 0.5){
    while(true){}
} else {
    console.log('завершено')
    process.exit()
}