const os = require('os')
const cluster = require('cluster')

//console.log('ос', os.platform()) 
//console.log('архитектура проц', os.arch()) 
//console.log('описание ядер проц', os.cpus())

// 2 ядра под ОС

if(cluster.isMaster) {
    for(let i = 0; i < os.cpus().length - 4; i++){
        cluster.fork() // запуск дочернего процесса
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Воркер с pid=${worker.process.pid} умер`)
        if(code === '200'){
            cluster.fork()
        } else {
            console.log(`Воркер с pid=${worker.process.pid} умер`)
        }
    })

} else {

    console.log(`Воркер с pid=${process.pid} запущен`)
    
    setInterval( () => {
        console.log(`Воркер с pid=${process.pid} еще работает`)
    }, 10000)
}