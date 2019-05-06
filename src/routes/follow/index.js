import express from 'express';

import postFollow from './postFollow';
import getFollow from './getFollow';
import getAllFollow from './getFollows';
import putFollow from './putFollow';

const router = express.Router();

router.get('/:id', getAllFollow);
router.get('/my/:id', getFollow);
router.post('/', postFollow);
router.put('/', putFollow);

export default router;
