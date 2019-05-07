import express from 'express';

import getUser from './getUser';
import getUserById from './getUserById';
import getUserByName from './getUserByName';
import postUser from './postUser';
import putUser from './putUser';

const router = express.Router();

router.get('/', getUser);
router.get('/:id', getUserById);
router.get('/search/:name', getUserByName);
router.post('/', postUser);
router.put('/', putUser);

export default router;
