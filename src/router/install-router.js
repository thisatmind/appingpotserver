import {Router} from 'express';
import InstallController from './../controller/install-controller';

const router = Router();

router.post('/', InstallController.add);

export default router;
