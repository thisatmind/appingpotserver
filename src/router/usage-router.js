import {Router} from 'express';
import UsageController from './../controller/usage-controller';

const router = Router();

router.post('/', UsageController.add);

export default router;
import {Router} from 'express';
import UsageController from './../controller/usage-controller';

const router = Router();

router.post('/', UsageController.add);

export default router;
