const Router = require('../framework/Router.js')

const router = new Router()

const users = [
    {id: 1, name: 'Danila'},
    {id: 2, name: 'Egor'},
]

router.get('/c', (req, res) => {
    res.writeHead(200, {'Content-type' : 'application/json'})
    res.end(JSON.stringify(users))
})

router.post('/c', (req, res) => {
    res.end('test')
})

router.get('/a', (req, res) => {
    res.end('A')
})


router.get('/b', (req, res) => {
    res.end('B')
})

module.exports = router