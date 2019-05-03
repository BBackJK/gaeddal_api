import express from 'express';

import tests from './test';
import users from './users';
import auth from './auth';
import follow from './follow';

const router = express.Router();

router.use('/test', tests);
router.use('/user', users);
router.use('/auth', auth);
router.use('/follow', follow);

export default router;
