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
            res.json({
                  msg:'hello get'
            })
        })

        this.app.post('/api', (req, res)=>{
            res.json({
                  msg:'hello post'
            })
        })

        this.app.put('/api', (req, res)=>{
            res.json({
                  msg:'hello put'
            })
        })

        this.app.delete('/api', (req, res)=>{
            res.json({
                  msg:'hello delete'
            })
        })

        this.app.patch('/api', (req, res)=>{
            res.json({
                  msg:'hello patch'
            })
        })
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port )
        })
    }

}

module.exports = Server
