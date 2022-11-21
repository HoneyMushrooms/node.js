// const dotenv = require('dotenv');
// dotenv.config();
require("dotenv").config();

console.log(process.pid)

console.log(process.env.PORT)
console.log(process.env.NODE_ENV)

if(Math.random() > 0.5){
    while(true){}
} else {
    console.log('завершено')
    process.exit()
}