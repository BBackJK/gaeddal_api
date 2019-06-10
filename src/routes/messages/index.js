import express from 'express';

import getMessages from './getMessages';
import postMessages from './postMessages';
import putMessages from './putMessages';
import deleteMessages from './deleteMessages';

import { Util } from '../../util';

const router = express.Router();

router.get('/', Util.isLoggedIn, getMessages);
router.post('/', Util.isLoggedIn, postMessages);
router.put('/', Util.isLoggedIn, putMessages);
router.delete('/:id', Util.isLoggedIn, deleteMessages);

export default router;
