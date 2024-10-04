import express from 'express';
import path from 'path';

import appRouter from './routes/app.routes.js';
import authRouter from './routes/auth.routes.js';

const app = express();

app.use(express.json());
app.use(express.static(path.join(import.meta.dirname, 'public')));

app.use(appRouter, authRouter);

app.listen(3000, () => {
  console.info('Server Running : 3000');
});
