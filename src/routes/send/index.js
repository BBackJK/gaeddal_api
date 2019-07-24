import express from 'express';

import getSendBySend from './getSendBySend';
import getSendByreceive from './getSendByReceive';
import getSendById from './getSendById';
import postSend from './postSend';
import putSend from './putSend';
import deleteSend from './deleteSend';

import { Util } from '../../util';

const router = express.Router();

router.get('/send', Util.isLoggedIn, getSendBySend);
router.get('/receive', Util.isLoggedIn, getSendByreceive);
router.get('/receive/:id', Util.isLoggedIn, getSendById);
router.post('/', Util.isLoggedIn, postSend);
router.put('/', Util.isLoggedIn, putSend);
router.delete('/:id', Util.isLoggedIn, deleteSend);

export default router;
