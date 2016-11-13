import {Router} from 'express';
import RecoController from './../controller/reco-controller';

const router = Router();

router.post('/send', RecoController.send);

export default router;
