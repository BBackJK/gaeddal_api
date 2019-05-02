import express from 'express';

import tests from './test';
import users from './users';
import auth from './auth';

const router = express.Router();

router.use('/test', tests);
router.use('/user', users);
router.use('/auth', auth);

export default router;
