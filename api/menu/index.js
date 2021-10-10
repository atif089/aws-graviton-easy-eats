const { Router } = require('express')
const router = Router()

const output = [
  {
    item_id: 'cb678161-f4be-4f50-8be7-23aea9e72ae1',
    item_name: 'Chicken Biryani',
    item_price: 285,
    item_image: 'https://picsum.photos/300/300',
    tags: ['new', 'top-selling', 'main-course'],
  },
  {
    item_id: 'd84a591f-b91f-4d7b-a26e-54374533f516',
    item_name: 'Mutton Biryani',
    item_price: 285,
    item_image: 'https://picsum.photos/300/300',
    tags: ['main-course'],
  },
  {
    item_id: 'acc17524-fe1c-4ea0-900e-6f1c6a4ea3db',
    item_name: 'Chicken 65',
    item_price: 205,
    item_image: 'https://picsum.photos/300/300',
    tags: ['new', 'top-selling'],
  },
]

router.use('/menu', (req, res) => {
  res.end(JSON.stringify(output))
})

module.exports = router
