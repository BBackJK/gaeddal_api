import express from 'express';

import getSendBySend from './getSendBySend';
import postSend from './postSend';

const router = express.Router();

router.get('/send/:id', getSendBySend);
router.post('/', postSend);

export default router;
