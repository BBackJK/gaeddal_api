import express from 'express';
import swagger from 'swagger-ui-express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import compression from 'compression';
import helmet from 'helmet';

import routers from './routes/index';
import db from './db/db';
import apiDocs from '../swagger.json';

dotenv.config({path : 'config.env'});

const app = express();

app.use (
    cors(),
    bodyParser.json(),
    bodyParser.urlencoded({extended : true}),
    compression(),
    helmet()
)

app.use('/docs', swagger.serve, swagger.setup(apiDocs));
app.use('/', routers);

db.sequelize.sync()
    .then(() => {
        console.log('sequelize sync success');
    })
    .catch(err => {
        console.error(err);
    });

app.listen(process.env.SERVER_PORT, () => {
    console.log(`express server start on port ${process.env.SERVER_PORT}`);
});
