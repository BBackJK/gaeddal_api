import express from 'express';

import getImages from './getImages';
import putImages from './putImages';
import putBasic from './putBasic';

import { Util, awsS3 } from '../../util';

const router = express.Router();

router.get('/', Util.isLoggedIn, getImages);
router.put('/', Util.isLoggedIn, awsS3.single('img'), putImages);
router.put('/basic', Util.isLoggedIn, putBasic);

export default router;
