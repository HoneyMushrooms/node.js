const fs = require('fs')
const path = require('path')

function successCallback(result) {
    console.log("Успешно завершено с результатом " + result);
    }
    
function failureCallback(error) {
    console.log("Завершено с ошибкой " + error);
}

function print(data) {
    console.log("file: " + data);
}



const writeFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.writeFile(path, data, (err) => {
        if(err) {
            return reject(err.message)
        }

        resolve('start')
    }))
}

const appendFileAsync = async (path, data) => {
    return new Promise((resolve, reject)=> fs.appendFile(path, data, (err) => {
        if(err) {
            return reject(err.message)
        }

        resolve()
    }))
}

const readFileAsync = async(path) => {
    return new Promise((resolve, reject) => fs.readFile(path, {encoding: 'utf-8'}, (err, data) => {
        if(err) {
            return reject(err.message)
        }

        resolve(data)
    }))
}

const removeFileAsync = async(path) => {
    return new Promise((resolve, reject) => fs.rm(path, {encoding: 'utf-8'}, (err) => {
        if(err) {
            return reject(err.message)
        }

        resolve()
    }))
}


const fullpath = path.resolve(__dirname, 'text.txt')

writeFileAsync(fullpath, 'text').then(successCallback, failureCallback)
    .then( appendFileAsync(fullpath, ' 1 '))
    .then( appendFileAsync(fullpath, ' 2 '))
    .then( appendFileAsync(fullpath, ' 3 '))
    .then(appendFileAsync(fullpath, ' 4 '))
    .then(readFileAsync(fullpath).then(print))
    .catch(err => failureCallback(err))
    .finally(()=>{console.log("Суета окончена")})


// Через переменную окружения передать строку, записать ее в файл
// прочитать файл, посчитать кол-во слов в файле и записать
// их в новый файл count.txt, затем удалить первый файл

// require('dotenv').config()

// const text = process.env.TEXT || ''

// writeFileAsync(path.resolve(__dirname, 'text.txt'), text)
//     .then(() => readFileAsync(path.resolve(__dirname, 'text.txt')))
//     .then(data => data.split(' ').length)
//     .then(count => writeFileAsync(path.resolve(__dirname, 'count.txt'), `Кол-во слов ${count}`))
//     .then(() => removeFileAsync(path.resolve(__dirname, 'text.txt')))

// такая еще возможность есть

// const fsPromise = require('fs/promises')

// fsPromise.writeFile('/').then().catch()
