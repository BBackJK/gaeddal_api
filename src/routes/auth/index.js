import express from 'express';

import login from './login';
import me from './me';
import refresh from './refresh';

import { Util } from '../../util';

const router = express.Router();

router.post('/', login);
router.get('/me', Util.isLoggedIn, me);
router.get('/refresh', Util.isLoggedIn, refresh);

export default router;
