const express = require('express')
const app = express()

const menuRoute = require('./menu')
const orderRoute = require('./order')

app.use(express.json())

app.use(menuRoute)
app.use(orderRoute)

if (require.main === module) {
  const port = 3001
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`)
  })
}

module.exports = app
