import express from 'express';

import tests from './test';
import users from './users';
import auth from './auth';
import follow from './follow';
import messages from './messages';

const router = express.Router();

router.use('/test', tests);
router.use('/user', users);
router.use('/auth', auth);
router.use('/follow', follow);
router.use('/messages', messages);

export default router;
