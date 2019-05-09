import express from 'express';

import postFollow from './postFollow';
import getFollow from './getFollow';
import getAllFollow from './getFollows';
import putFollow from './putFollow';
import deleteFollow from './deleteFollow';

import { Util } from '../../util';

const router = express.Router();

router.get('/:id', getAllFollow);
router.get('/my/:id', getFollow);
router.post('/', postFollow);
router.put('/', putFollow);
router.delete('/:id', Util.isLoggedIn, deleteFollow);

export default router;
