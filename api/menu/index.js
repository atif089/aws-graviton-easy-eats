const { Router } = require('express')
const router = Router()

const notionService = require('../../service/notion')

router.use('/menu', (req, res) => {
  notionService.getMenu().then(data => {
    res.end(JSON.stringify(data))
  })
})

module.exports = router
