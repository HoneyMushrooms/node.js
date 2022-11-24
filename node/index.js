const Router = require('../framework/Router.js')
const Application = require('../framework/Application')

const PORT = process.env.PORT || 5000;

const app = new Application();
const router = new Router();

router.get('/a', (req, res) => {
    res.end('win')
})

router.get('/b', (req, res) => {
    res.end('win2')
})

app.addRouter(router)

app.listen(PORT, () => { console.log(`server started on PORT ${PORT}`) })