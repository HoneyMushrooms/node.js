const Router = require('../framework/Router.js')
const Application = require('../framework/Application.js')
const userRouter = require('../src/user-router.js')

const PORT = process.env.PORT || 5000;

const app = new Application();


app.addRouter(userRouter)

app.listen(PORT, () => { console.log(`server started on PORT ${PORT}`) })