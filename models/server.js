const express = require('express')

class Server {

    constructor() {
        this.app  = express()
        this.port = process.env.PORT

        this.middlewares()

        this.routes()
    }

    middlewares() {
        this.app.use( express.static('public') )
    }

    routes() {
        this.app.get('/api', (req, res)=>{
            res.send('hello word')
        })
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port )
        })
    }

}

module.exports = Server
