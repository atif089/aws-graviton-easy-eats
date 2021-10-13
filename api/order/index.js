const { Router } = require('express')
const router = Router()

const notionService = require('../../service/notion')

router.use('/order/:orderId', (req, res) => {
  notionService
    .getOrder(req.params.orderId)
    .then(data => {
      res.end(JSON.stringify(data))
    })
    .catch(err => {
      res.end(JSON.stringify('{}'))
    })
})

router.use('/order', (req, res) => {
  const orderFromUser = {
    billing_name: req.body.billing_name,
    delivery_coordinates: req.body.delivery_coordinates,
    phone_number: req.body.phone_number,
    order_data: req.body.order_data
  }
  const orderDataExtrapolated = []

  notionService.getMenu().then(menu => {
    let orderTotals = 0
    orderFromUser.order_data.forEach(order => {
      const item = menu.find(menuItem => menuItem.id === order.item_id)
      const subTotal = item.item_price * order.quantity
      orderDataExtrapolated.push(
        `(${order.quantity}) ${item.item_name} -  at ${item.item_price}. Sub Total: ${subTotal}`
      )
      orderTotals = orderTotals + subTotal
    })
    orderDataExtrapolated.push(`Final Total: ${orderTotals}`)

    const orderToSubmit = {
      billing_name: orderFromUser.billing_name,
      delivery_coordinates: orderFromUser.delivery_coordinates,
      phone_number: orderFromUser.phone_number,
      order_data: JSON.stringify(orderFromUser.order_data),
      order_data_extrapolated: orderDataExtrapolated.join('\n')
    }

    notionService.submitOrderAsync(orderToSubmit).then(data => {
      res.end(JSON.stringify(data))
    })
  })
})

module.exports = router
