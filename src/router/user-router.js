import {Router} from 'express';
import UserController from '../controller/user-controller';
import InstallController from '../controller/install-controller';

const router = Router();

router.get('/profile', UserController.getProfile);
router.post('/signup', UserController.signup);
router.post('/sendfcm', UserController.sendfcm);
router.post('/installedApp', InstallController.add)
router.put('/deviceToken', UserController.updateDeviceToken);
export default router;
