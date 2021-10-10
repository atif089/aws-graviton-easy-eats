const { Client } = require('@notionhq/client')
const { NOTION_ACCESS_TOKEN, NOTION_PARENT_ID } = require('../config.js')

const notion = new Client({ auth: NOTION_ACCESS_TOKEN })

// check if a page with the NOTION_PARENT_ID exists
// check if the page has a database called Menu
// check if the database Menu has specific columns
// check if the page has a database called Orders
// check if the database Orders has specific columns

let NOTION_MENU_DB_ID = ''
let NOTION_ORDERS_DB_ID = ''

async function getDbIdsAsync() {
  const dbResponse = await notion.search({
    filter: {
      value: 'database',
      property: 'object',
    },
  })

  dbResponse.results.forEach((db) => {
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
    database_id: NOTION_MENU_DB_ID,
  })
  dbResponse.results.forEach((item) => {
    const menuItem = {
      id: item.id,
      item_name: item.properties?.item_name?.title[0]?.plain_text,
      item_image: item.properties?.item_image?.files[0]?.name,
      item_price: item.properties?.item_price?.number,
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


getDbIdsAsync();

module.exports.getDbIdsAsync = getDbIdsAsync
module.exports.getMenu = getMenu

// async function getMenuAsync() {

//   try {

//   const
//   dbResponse.results[0].id

// }

//   response.results

//   console.log(response)
//   debugger
//   return response
// }

// write a function to check if a page with the NOTION_PARENT_ID exists
async function checkPageExists() {
  try {
    const page = await notion.getPage(NOTION_PARENT_ID)
    console.log('Page exists')
  } catch (error) {
    console.log('Page does not exist')
  }
}

async function setupDbAsync() {
  ;(async () => {
    const menuDb = await notion.databases.create({
      parent: { page_id: NOTION_PARENT_ID },
      title: [
        {
          type: 'text',
          text: {
            content: 'Menu',
            link: null,
          },
        },
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
              { name: 'Desserts', color: 'purple' },
            ],
          },
        },
        item_image: { files: {} },
      },
    })

    const ordersDb = await notion.databases.create({
      parent: { page_id: NOTION_PARENT_ID },
      title: [
        {
          type: 'text',
          text: {
            content: 'Orders',
            link: null,
          },
        },
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
              { name: 'Cancelled', color: 'default' },
            ],
          },
        },
      },
    })
  })()
}
