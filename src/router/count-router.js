import {Router} from 'express';
import CountController from './../controller/count-controller';

const router = Router();

router.post('/', CountController.add);

export default router;
