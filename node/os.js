const os = require('os')
const cluster = require('cluster')

console.log('ос', os.platform()) 
console.log('архитектура проц', os.arch()) 
console.log('описание ядер проц', os.cpus())

// 2 ядра под ОС

if(cluster.isMaster) {
    for(let i = 0; i < os.cpus.length; i++){
        cluster.fork() // запуск дочернего процесса
    }
} else {
    setInterval( () => {
    console.log(`Воркер с pid=${process.pid} еще работает`)
    }, 10000)
}

while (true) {
    
}

// if (cluster.isMaster) {
//     for (let i = 0; i < os.cpus().length - 2; i++) {
//         cluster.fork()
//     }
//     cluster.on('exit', (worker, code, signal) => {
//         console.log(`Воркер с pid = ${worker.process.pid} умер`)
//         if(code ===) {
//             cluster.fork()
//         } else {
//             console.log('Воркер умер...')
//         }
//     })
// } else {
//     console.log(`Воркер с pid= ${process.pid} запущен`)
//
//     setInterval(() => {
//         console.log(`Воркер с pid= ${process.pid} еще работает`)
//     }, 5000)
// }