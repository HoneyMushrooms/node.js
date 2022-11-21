const { rejects } = require('assert')
const fs = require('fs')
const { resolve } = require('path')
const path = require('path')

// для устаревшой версии ноды

const writeFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.writeFile(path, data, (err) => {
        if(err) {
            return reject(err.message)
        }

        resolve()
    }))
}

const appendFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.appendFile(path, data, (err) => {
        if(err) {
            return reject(err.message)
        }

        resolve()
    }))
}

const fullpath = path.resolve(__dirname, 'text.txt')

writeFileAsync(path.resolve(__dirname, 'text.txt'), 'text')
    .then(() => appendFileAsync(fullpath, ' 1 '))
    .then(() => appendFileAsync(fullpath, ' 2 '))
    .then(() => appendFileAsync(fullpath, ' 3 '))
    .then(() => appendFileAsync(fullpath, ' 4 '))
    .catch(err => console.log(err))

