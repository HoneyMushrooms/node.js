const http = require('http');
const Emmiter = require('events');
const PORT = process.env.PORT || 5000;

const emmit = new Emmiter(); 

class Router{
    constructor(){
        this.endpoints = {}
    }

    request(method = "GET", path, handler){
        if(!this.endpoints[path]){
            this.endpoints[path] = {}
        }

        const endpoint = this.endpoints[path];

        if(endpoint[method]) {
            throw new Error(`[${method}] по адресу ${path} уже существует`)
        }

        endpoint[method] = handler
        emmit.on(`[${path}]:[${method}]`, (req, res) => {
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

router.get('/users', (req, res) => {
    res.end('Users')
})

router.get('/posts', (req, res) => {
    res.end('Posts')
})

const server = http.createServer((req, res) => {

    const emmitted = emmit.emit(`[${req.url}]:[${req.method}}]`, req, res)
    
    if(!emmitted){
        res.end(req.url)
    }

})

server.listen(PORT, () =>{
    console.log(`server started on PORT ${PORT}`)
})