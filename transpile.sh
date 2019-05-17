#!/bin/sh
mkdir -p lib/src
babel ./src/app.js -o lib/src/app.js
babel ./src -d lib/src
cp package.json lib/package.json
cp swagger.json lib/swagger.json
cp package-lock.json lib/package-lock.json
cp config-dev.env lib/config-dev.env