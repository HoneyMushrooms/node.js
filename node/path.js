const path = require('path');

// __dirname aбсолютный путь 
// console.log('под любую ос склейка пути', path.join(__dirname,'0', 'one', '..'));


console.log(path.resolve('0', 'one'))
const fullpath = path.resolve('one', 'two.js')

console.log('парсинг пути',path.parse(fullpath))
console.log('разделитель в ОС', path.sep)
console.log('проверка на абсолютный путь', path.isAbsolute(fullpath))
console.log('название файла', path.basename(fullpath))
console.log('расширение файла', path.extname(fullpath))

// ----------------------------------------
const siteURL = 'http://localhost:8080/users?id=2313'

const url = new URL(siteURL);

console.log(url)