import { Router } from "express";
import * as pingController from '../controllers/ping';
import * as authController from '../controllers/auth';

export const mainRouter = Router();

mainRouter.get('/ping', pingController.ping);
// mainRouter.get('/privateping');

// Autenticação
mainRouter.post('/auth/signup', authController.signup);
mainRouter.post('/auth/signin', authController.signin);

// // Tweet
// mainRouter.post('/tweet');
// mainRouter.get('/tweet/:id');
// mainRouter.get('/tweet/:id/answers');
// mainRouter.post('/tweet/:id/like');

// // Usuário
// mainRouter.get('/user/:slug');
// mainRouter.get('/user/:slug/tweets');
// mainRouter.post('/user/:slug/follow');
// mainRouter.put('/user');
// mainRouter.put('/user/avatar');
// mainRouter.put('/user/cover');

// // Sistema
// mainRouter.get('/feed');
// mainRouter.get('/search');
// mainRouter.get('/trending');
// mainRouter.get('/suggestions');