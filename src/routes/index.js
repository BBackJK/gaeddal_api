import express from 'express';

import users from './users';
import auth from './auth';
import follow from './follow';
import messages from './messages';
import send from './send';

const router = express.Router();

router.use('/user', users);
router.use('/auth', auth);
router.use('/follow', follow);
router.use('/messages', messages);
router.use('/send', send);

export default router;
