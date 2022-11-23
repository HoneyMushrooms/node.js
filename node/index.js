const http = require('http');
const EventEmitter = require('events');
const PORT = process.env.PORT || 5000;

const emmitter = new EventEmitter(); 
a = 1

class Router{
    
    constructor(){
        this.endpoints = {}
    }

    request(method = "GET", path, handler){
        if(!this.endpoints[path]){
            this.endpoints[path] = {}
        }
        const endpoint = this.endpoints[path]

        if(endpoint[method]) {
            console.log(new Error(`[${method}] по адресу ${path} уже существует`))
        }
        endpoint[method] = handler

        emmitter.on(`[${path}]:[${method}]`, (req, res) => {
            console.log('we there')
            handler(req, res)
        })
    }

    get(path, handler) {
        this.request ('GET', path, handler);
    }
    post(path, handler) {
        this.request ('POST', path, handler);
    }
    put(path, handler) {
        this.request ('PUT', path, handler);
    }
    delete(path, handler) {
        this.request ('DELETE', path, handler);
    }
}

const router = new Router();

router.get('/a', (req, res) => {
    res.end('win')
})


router.get('/posts', (req, res) => {
    res.end('win')
})

const server = http.createServer((req, res) => {
    console.log('a = ', a++)
    const emmitted = emmitter.emit(`[${req.url}]:[${req.method}]`, req, res)
    
    if(!emmitted){
        res.write('ss')
        res.end(req.url)
    }
 
})

server.listen(PORT, () =>{
    console.log(`server started on PORT ${PORT}`)
})