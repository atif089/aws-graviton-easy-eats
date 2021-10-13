# Easy Eats

## Demo 

http://ec2-35-85-230-91.us-west-2.compute.amazonaws.com/

## Install Instructions

1. Create a Notion account.
2. Go to My Integrations on Notion and when you create a new integration you should be able to get a secret key which looks like this ![image](https://user-images.githubusercontent.com/541359/137204345-8dfae852-bd54-4d30-8c73-09bc8bd7f4bd.png). Let's call it NOTION_ACCESS_TOKEN
3. On the notion app, create an empty page and open in. In the URL you should see it's UUID which we need to install databases under that page. ![image](https://user-images.githubusercontent.com/541359/137204596-92493c1c-5e0e-430c-92d3-adf5e87cd311.png) Let's call it NOTION_PARENT_ID
4. Clone this project in your preferred environent.
5. In the docker-compose.yml file update the values for the NOTION_ACCESS_TOKEN and NOTION_PARENT_ID variables. ![Code_X6i5DYWEpd](https://user-images.githubusercontent.com/541359/137204968-3d869646-019f-4e21-b7ad-6478dd96d003.png)
6. For managing the menu and orders, install Notion App on your phone or you can also use the web app https://www.notion.so/


## Inspiration

Covid-19 brought tremendous change to the world. One of the biggest changes was in the way we work. While a lot of workers and businesses were displaced it also brought a trend of new businesses being created. One such business is food delivery.

Food delivery is a great business to start from home with a low barrier to entry. The SaaS based enablers however charge fees as high as 30% of the order thus making it less lucrative for the business owners. We made Easy Eats to help these small business owners.

## What it does

Easy eats is a self hosted solution that allows businesses to easily start their own online order taking platform where they can manage their menu and accept orders online.

It's free to use, completely open source, can take hundreds of orders in a month and costs less than $3 a month to maintain using AWS Graviton compute instances.

## How we built it

Built on top of Notion API serving as the backend and database for handling menu and orders, we used Vue and Nuxt JS to build middleware and frontend on Nuxt JS.

## Challenges we ran into

Most of the challenges were around Notion API. We used this API due to lack of time in building a full fledge backend admistration area for the owner.

The Notion API is currently incomplete which has prevented us from creating a 1-click bootstrapper for installing the server. The user now has to perform a few manual steps to start their store.

The Notion API can always be replaced by any database or a proper CRUD app like Django or Laravel.

## Accomplishments that we're proud of

We wanted to establish a few things which we were successful and proud of

1. Notion API can be used as a database eliminating the need of spending tens of hours in building a custom backend for MVP
2. End to End flow of users being able to see the menu and picking the items and their quantities to create a cart and order it
3. The product can run on minimal specs like T4G compute instances

## What we learned

We learned how to build a backend for a self hosted product on top of Notion API and deploy it using docker. We also learned how to build a product from scratch without spending a great deal of time on it.

## What's next for Easy Eats

1. Fix any UI bugs
2. Add some features like taking user's location on the map
3. Replace Notion API with a hosted database like SQLite therefore packing the whole application into a small monolith docker container.


## Build Setup (Nuxt)

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
