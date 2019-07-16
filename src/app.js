import express from 'express';
import swagger from 'swagger-ui-express';
import cors from 'cors';
import bodyParser from 'body-parser';
import compression from 'compression';
import helmet from 'helmet';

import routers from './routes/index';
import db from './database/database';
import apiDocs from '../swagger.json';

const { server, database } = require('../config').default;

const app = express();

app.use(
  cors(),
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true }),
  compression(),
  helmet(),
);

app.use('/docs', swagger.serve, swagger.setup(apiDocs));
app.use('/', routers);

db.sequelize
  .sync({ force: database.sync })
  .then(() => {
    console.log('sequelize sync success');
  })
  .catch((err) => {
    console.error(err);
  });

app.listen(server.port, () => {
  console.log(`express server start on port ${server.port}`);
});
