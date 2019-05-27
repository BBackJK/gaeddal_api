# Gaeddal_api

This is **Rest API** for service that named "Gaeddal" of Team DDD.

# Getting Started

This api service architecture is Node.js, Express.js, MySQL and es6.

## Prepared

### Install

- Node.JS : [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
- MySQL : [https://dev.mysql.com/downloads/](https://dev.mysql.com/downloads/)
- Docker-for-mac : [https://docs.docker.com/docker-for-mac/install/](https://docs.docker.com/docker-for-mac/install/)
- Docker-for-Window : [https://docs.docker.com/docker-for-windows/install/](https://docs.docker.com/docker-for-mac/install/)

# Create development environment

```
git clone https://github.com/BBackJK/gaeddal_api.git
cd gaeddal_api/
npm install
```

## Start

### Start without local mysql

If your local dont't have mysql, start mysql container.

```
// mysql container in local
docker run -d -p 3306:3306 --name database \
-e MYSQL_ROOT_PASSWORD=test \
-e MYSQL_DATABASE=gaeddal \
-e MYSQL_HOST=localhost \
-v ~/database/gaeddal:/var/lib/mysql mysql:5.7

// check container
docker ps -a

// start project
npm start
```

### Start with local mysql

Setting your mysql **CREATE DATABASE gaeddal**

start this project on local.

```
npm start
```

### Start with docker

in gaeddal_api folder..

```
// run mysql container
docker run -d -p 3306:3306 --name database \
-e MYSQL_ROOT_PASSWORD=test \
-e MYSQL_DATABASE=gaeddal \
-e MYSQL_HOST=database \
-v ~/database/gaeddal:/var/lib/mysql mysql:5.7

// build project with docker
docker build -t gaeddal-api .

// check images
docker images

// run api container
docker run -d -p 8000:8000 --name api \
--link database \
-e MYSQL_ROOT_PASSWORD=test \
-e MYSQL_DATABASE=gaeddal \
-e MYSQL_HOST=database \
gaeddal-api

// check container
docker ps -a
```

### Start with docker-compose

```
// build project with docker
docker build -t gaeddal-api .

// start docker compose
docker-compose up -d

// check container
docker ps -a

// stop container
docker-compose down
```

## Other Scripts

```
npm run lint // check eslint
npm run trans // transpile babel file
```

it you want to know the api of this project, you connect http://localhost:8000/docs
