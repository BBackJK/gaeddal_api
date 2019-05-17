import express from 'express';

import users from './users';
import auth from './auth';
import follow from './follow';
import messages from './messages';
import send from './send';
import alarmList from './alarmList';
import email from './email';

const router = express.Router();

router.use('/user', users);
router.use('/auth', auth);
router.use('/follow', follow);
router.use('/messages', messages);
router.use('/send', send);
router.use('/alarmList', alarmList);
router.use('/email', email);

export default router;
