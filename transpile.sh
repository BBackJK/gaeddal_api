mkdir -p lib
mkdir -p lib/src
babel ./src/app.js -o lib/src/app.js
babel ./src/controllers -d lib/src/controllers
babel ./src/db -d lib/src/db
babel ./src/models -d lib/src/models
babel ./src/routes -d lib/src/routes
babel ./src/util -d lib/src/util
cp package.json lib/package.json
cp swagger.json lib/swagger.json
cp package-lock.json lib/package-lock.json
cp config.env lib/config.env