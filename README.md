
# Picsyl

An image sharing platform for the art community. Upload your images and share with the community!



## Features

- Fully responsive app
- Like/Un-like posts 
- Comment on posts
- Upload image files



## Tech Stack

**Client:** React, HTML5, Sass 

**Server:** Node, Express, MySQL


## Run Locally

Clone the project

```bash
  git clone https://github.com/b0p1/picsyl-server.git
```

Go to the project directory

```bash
  cd picsyl-server
```

Install dependencies

```bash
  npm install
```

In order to use the database, first you must set it up with:

```bash
  npx knex migrate:latest 
  npx knex seed:run 
```

Start the server

```bash
  npm run start
```
Backend of the app is now live! --
DON'T forget to start up the client side!

