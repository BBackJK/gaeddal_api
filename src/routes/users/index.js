import express from 'express';

import getUserById from './getUserById';
import getUserByPhone from './getUserByPhone';
import postUser from './postUser';
import putUser from './putUser';
import removeUser from './deleteUser';

import { Util } from '../../util';

const router = express.Router();

router.get('/:id', getUserById);
router.get('/search/:phone', getUserByPhone);
router.post('/', postUser);
router.put('/', putUser);
router.delete('/', Util.isLoggedIn, removeUser);

export default router;
