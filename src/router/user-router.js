import {Router} from 'express';
import UserController from './../controller/user-controller';

const router = Router();

router.post('/signup', UserController.signup);
router.post('/sendfcm', UserController.sendfcm);
router.put('/deviceToken', UserController.updateDeviceToken);

export default router;
