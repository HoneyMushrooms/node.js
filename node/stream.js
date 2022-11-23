// Readable - чтение
// Writable - Запись
// Duplex - Для чтения и записи Readable + Writable
// Transform - Такой же как Duplex, но может изменить данные по мере чтения

const fs = require('fs')
const path = require('path')

const fullpath = path.resolve(__dirname, 'text.txt')

// fs.readFile(fullpath, (err, data) => {
//     if(err){
//         console.log(err)
//     }
//     console.log(data)
//     console.log('END')
// })

// const stream = fs.createReadStream(fullpath)

// stream.on('data', (chunk) => { console.log(chunk) })

// stream.on('end', () => { console.log('закончили читать') })

// stream.on('open', () => { console.log('Начали читать') })

// stream.on('error', (err) => { console.log(err) })



// const writeFileStream = fs.createWriteStream(path.resolve(__dirname, 'text2.txt'))

// for (let i = 0; i < 10; i++) {
//     writeFileStream.write(i + '\n')
// }

// writeFileStream.end()

const hhtp = require('http')
const { Stream } = require('stream')

http.createServer((req, res) => {
    //req - Readable stream
    //res - Writable stream
     const stream = fs.createReadStream(path.resolve(__dirname, 'text2.txt'))
    // stream.on('data', chunk => res.write(chunk))
    // stream.on('end', () => res.end())
    // stream.pipe(res) синхр, след чан не начнет считываться пока не скачаться пред
})