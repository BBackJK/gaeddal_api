import express from 'express';

import postFollow from './postFollow';
import getFollow from './getFollow';
import getAllFollow from './getAllFollow';
import putFollow from './putFollow';
import deleteFollow from './deleteFollow';

import Util from '../../util';

const router = express.Router();

router.get('/', Util.isLoggedIn, getAllFollow);
router.get('/my', Util.isLoggedIn, getFollow);
router.post('/', postFollow);
router.put('/', Util.isLoggedIn, putFollow);
router.delete('/:id', Util.isLoggedIn, deleteFollow);

export default router;
