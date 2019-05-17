import express from 'express';

import getEmail from './getEmail';
import putEmail from './putEmail';

import { Util } from '../../util';

const router = express.Router();

router.get('/', Util.isLoggedIn, getEmail);
router.put('/', Util.isLoggedIn, putEmail);

export default router;
