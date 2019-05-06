# Gaeddal_api

This is **Rest API** for service that named "Gaeddal" of Team DDD.

It is not finished yet. so I have not used a docker yet

# Getting Started

This api service architecture is Node.js, Express.js, MySQL and es6.

## Prepared 

### Install

* Node.JS : [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
* MySQL : [https://dev.mysql.com/downloads/](https://dev.mysql.com/downloads/)

# Create development environment

```
git clone https://github.com/BBackJK/gaeddal_api.git
cd gaeddal_api/
npm install
```

## Before start

As I said before, I have not used a docker yet. (similarly, docker-compose)

so you must create a database named by "gaeddal".

if you don't like the name "gaeddal", change the code.

```
in src/db/db.js...

const sequelize = new Sequelize(
        process.env.DB_NAME,              // change the database name 
        process.env.DB_USERNAME, 
        process.env.DB_PASSWORD, 
        {
            host : process.env.DB_HOST,
            dialect : 'mysql',
            operatorAliases : false,
        })
```

so I used **dotenv** in this project. (SERVER_PORT / DB_NAME / DB_USERNAME / DB_PASSWORD / DB_HOST / JWT_SECRET)

> ref) Using dotenv : [https://www.npmjs.com/package/dotenv](https://www.npmjs.com/package/dotenv)

Anyways, if you create a database, you do not have to worry about tables.

because I used sequelize. database table is automatically craeted.

if you set this all up, npm start

## Start

start this project

```
npm start
```

it you want to know the api of this project, you connect http://localhost:8080/docs


