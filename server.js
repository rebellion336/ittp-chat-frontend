const cors = require('cors')

const path = require('path')

const express = require('express')
const next = require('next')
const compression = require('compression')

const dev = process.env.NODE_ENV === 'develop'
const app = next({ dev })
const handle = app.getRequestHandler()

const port = process.env.SERVER_PORT || 9000

app
  .prepare()
  .then(() => {
    const server = express()

    // server.get('/lives/:id', (req, res) => {
    //   const actualPage = '/lives_vdo'
    //   const queryParams = { id: req.params.id }
    //   app.render(req, res, actualPage, queryParams)
    // })
    server.use(compression())
    server.use(cors())
    // serve locales for client
    server.use('/locales', express.static(path.resolve('./locales')))

    server.get('*', (req, res) => handle(req, res))

    server.listen(port, err => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })
