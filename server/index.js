if (process.env.NODE_ENV !== 'production') {
  require('dotenv-safe').load()
}

const next = require('next')
const express = require('express')
const routes = require('../src/routes')
// const mailRouter = require('./mailRouter')

const app = next({dev: process.env.NODE_ENV !== 'production'})
const port = process.env.PORT || 3000
const handler = routes.getRequestHandler(app)

app.prepare().then(() => {
  express()
    .use(handler)
    // .use('/contact', mailRouter)
    .listen(port)
})
