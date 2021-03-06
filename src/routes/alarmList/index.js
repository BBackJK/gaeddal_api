import express from 'express';

import getAlarmList from './getAlarmList';
import getAlarmListById from './getAlarmListById';
import postAlarmList from './postAlarmList';
import putAlarmList from './putAlarmList';
import deleteAlarmList from './deleteAlarmList';

import { Util } from '../../util';

const router = express.Router();

router.get('/', Util.isLoggedIn, getAlarmList);
router.get('/:id', Util.isLoggedIn, getAlarmListById);
router.post('/', Util.isLoggedIn, postAlarmList);
router.put('/', Util.isLoggedIn, putAlarmList);
router.delete('/:id', Util.isLoggedIn, deleteAlarmList);

export default router;
