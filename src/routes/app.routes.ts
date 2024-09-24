import { Router } from 'express';

import { healthCheck, userInf } from '../controllers/app.controllers.js';
import { auth } from '../middlewares/auth.middlewares.js';

const appRouter = Router();

appRouter.get('/', healthCheck);

appRouter.get('/me', auth, userInf);

export default appRouter;
