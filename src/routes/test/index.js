import express from 'express';

import getTest from './getTest';
import postTest from './postTest';

const router = express.Router();

router.get('/',getTest);
router.post('/',postTest);

export default router;
