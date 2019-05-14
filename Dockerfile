FROM node:carbon-alpine

COPY ./ /origin

WORKDIR /origin

RUN npm install && \
    npm run trans && \
    npm prune --production 

EXPOSE 8000

CMD ["node", "./lib/src/app.js"]
