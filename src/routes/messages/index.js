import express from 'express';

import getMessages from './getMessages';
import postMessages from './postMessages';
import putMessages from './putMessages';

const router = express.Router();

router.get('/:id', getMessages);
router.post('/', postMessages);
router.put('/', putMessages);

export default router;
