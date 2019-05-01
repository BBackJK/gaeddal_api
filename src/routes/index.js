import express from 'express';

import tests from './test';
import users from './users';

const router = express.Router();

router.use('/test',tests);
router.use('/user',users);

export default router;
