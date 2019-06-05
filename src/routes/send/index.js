import express from 'express';

import getSendBySend from './getSendBySend';
import getSendByRecieve from './getSendByRecieve';
import postSend from './postSend';
import putSend from './putSend';

import { Util } from '../../util';

const router = express.Router();

router.get('/send', Util.isLoggedIn, getSendBySend);
router.get('/recieve', Util.isLoggedIn, getSendByRecieve);
router.post('/', Util.isLoggedIn, postSend);
router.put('/', Util.isLoggedIn, putSend);

export default router;
