import express from 'express';

import getSendBySend from './getSendBySend';
import getSendByRecieve from './getSendByRecieve';
import postSend from './postSend';

const router = express.Router();

router.get('/send/:id', getSendBySend);
router.get('/recieve/:id', getSendByRecieve);
router.post('/', postSend);

export default router;
