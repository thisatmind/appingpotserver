import {Router} from 'express';
import UserController from './../controller/user-controller';

const router = Router();

router.post('/signin', UserController.signin);

export default router;
