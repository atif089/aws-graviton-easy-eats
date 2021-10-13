const { Client } = require('@notionhq/client')
const { NOTION_ACCESS_TOKEN, NOTION_PARENT_ID } = require('../config.js')

const notion = new Client({ auth: NOTION_ACCESS_TOKEN })

let NOTION_MENU_DB_ID = ''
let NOTION_ORDERS_DB_ID = ''

function prepareTextField(value) {
  return {
    type: 'rich_text',
    rich_text: [
      {
        type: 'text',
        text: { content: value, link: null }
      }
    ]
  }
}

async function getDbIdsAsync() {
  const dbResponse = await notion.search({
    filter: {
      value: 'database',
      property: 'object'
    }
  })

  dbResponse.results.forEach(db => {
    switch (db.title[0].text.content) {
      case 'Menu':
        NOTION_MENU_DB_ID = db.id
        break
      case 'Orders':
        NOTION_ORDERS_DB_ID = db.id
        break
    }
  })

  return dbResponse
}

async function getMenu() {
  const menu = []
  const dbResponse = await notion.databases.query({
    database_id: NOTION_MENU_DB_ID
  })
  dbResponse.results.forEach(item => {
    const menuItem = {
      id: item.id,
      item_name: item.properties?.item_name?.title[0]?.plain_text,
      item_image: item.properties?.item_image?.files[0]?.name,
      item_price: item.properties?.item_price?.number
    }

    try {
      const tags = []
      for (const option of item.properties.item_tags.multi_select) {
        tags.push(option.name)
      }
      menuItem.item_tags = tags
    } catch (e) {}

    menu.push(menuItem)
  })
  return menu
}

async function submitOrderAsync(orderParams) {
  const order = {
    billing_name: orderParams.billing_name,
    phone_number: orderParams.phone_number,
    delivery_coordinates: orderParams.delivery_coordinates,
    order_data: orderParams.order_data,
    order_data_extrapolated: orderParams.order_data_extrapolated
  }

  const orderPage = await notion.pages.create({
    parent: { database_id: NOTION_ORDERS_DB_ID },
    properties: {
      billing_name: {
        type: 'title',
        title: [
          {
            type: 'text',
            text: { content: order.billing_name, link: null }
          }
        ]
      },
      delivery_coordinates: prepareTextField(order.delivery_coordinates),
      order_data: prepareTextField(order.order_data),
      order_data_extrapolated: prepareTextField(order.order_data_extrapolated),
      phone_number: prepareTextField(order.phone_number)
    }
  })

  return orderPage
}

async function getOrder(orderId) {
  const dbResponse = await notion.pages.retrieve({
    page_id: orderId
  })

  if (dbResponse.object !== 'page') {
    return false
  }

  const orderData = {
    status: dbResponse.properties.Status.select.name || 'Pending',
    billing_name: dbResponse.properties?.billing_name?.title[0]?.plain_text,
    phone_number: dbResponse.properties?.phone_number?.rich_text[0]?.plain_text,
    delivery_coordinates:
      dbResponse.properties?.delivery_coordinates?.rich_text[0]?.plain_text,
    order_data_extrapolated:
      dbResponse.properties?.order_data_extrapolated?.rich_text[0]?.plain_text
  }

  return orderData
}

getDbIdsAsync()

module.exports = { getDbIdsAsync, getMenu, getOrder, submitOrderAsync }

async function setupDbAsync() {
  ;(async () => {
    const menuDb = await notion.databases.create({
      parent: { page_id: NOTION_PARENT_ID },
      title: [
        {
          type: 'text',
          text: {
            content: 'Menu',
            link: null
          }
        }
      ],
      properties: {
        item_name: { title: {} },
        item_price: { number: {} },
        item_tags: {
          multi_select: {
            options: [
              { name: 'Best Selling', color: 'orange' },
              { name: 'Starters', color: 'pink' },
              { name: 'Main Course', color: 'brown' },
              { name: 'Drinks', color: 'blue' },
              { name: 'Desserts', color: 'purple' }
            ]
          }
        },
        item_image: { files: {} }
      }
    })

    const ordersDb = await notion.databases.create({
      parent: { page_id: NOTION_PARENT_ID },
      title: [
        {
          type: 'text',
          text: {
            content: 'Orders',
            link: null
          }
        }
      ],
      properties: {
        billing_name: { title: {} },
        phone_number: { number: {} },
        delivery_coordinates: { rich_text: {} },
        order_data: { rich_text: {} },
        order_data_extrapolated: { rich_text: {} },
        Status: {
          select: {
            options: [
              { name: 'In Progress', color: 'brown' },
              { name: 'Delivered', color: 'blue' },
              { name: 'Cancelled', color: 'default' }
            ]
          }
        }
      }
    })
  })()
}
