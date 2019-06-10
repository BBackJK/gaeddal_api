import express from 'express';

import getUser from './getUser';
import getUserByPhone from './getUserByPhone';
import postUser from './postUser';
import putUser from './putUser';
import removeUser from './deleteUser';

import { Util } from '../../util';

const router = express.Router();

router.get('/', Util.isLoggedIn, getUser);
router.get('/:phone', getUserByPhone);
router.post('/', postUser);
router.put('/', Util.isLoggedIn, putUser);
router.delete('/', Util.isLoggedIn, removeUser);

export default router;
