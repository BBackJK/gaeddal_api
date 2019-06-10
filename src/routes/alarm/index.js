import express from 'express';

import getAlarm from './getAlarm';
import postAlarm from './postAlarm';
import putAlarm from './putAlarm';
import deleteAlarm from './deleteAlarm';

import { Util } from '../../util';

const router = express.Router();

router.get('/', Util.isLoggedIn, getAlarm);
router.post('/', Util.isLoggedIn, postAlarm);
router.put('/', Util.isLoggedIn, putAlarm);
router.delete('/:id', Util.isLoggedIn, deleteAlarm);

export default router;
