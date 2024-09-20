import { Router } from 'express';

import { healthCheck, userInf } from '../controllers/app.controllers';
import { auth } from '../middlewares/auth.middlewares';

const router = Router();

router.get('/', healthCheck);

router.use(auth);

router.get('/me', userInf);

export default router;
