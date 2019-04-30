import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import compression from 'compression';
import helmet from 'helmet';

import routers from './routes/index';

dotenv.config({path : 'config.env'});

const app = express();

app.use (
    cors(),
    bodyParser.json(),
    bodyParser.urlencoded({extended : true}),
    compression(),
    helmet()
)

const router = routers(app);

app.listen(process.env.SERVER_PORT, () => {
    console.log(`express server start on port ${process.env.SERVER_PORT}`);
});
