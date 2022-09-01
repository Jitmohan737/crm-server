import express from 'express';
const router = express.Router();
import { signUpAuth, signInAuth,changePassword } from '../controllers/users.js';

router.post('/signin', signInAuth);
router.post('/signup', signUpAuth);
router.patch('/change-password',changePassword)

export default router;
