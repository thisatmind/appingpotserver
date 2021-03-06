import {Router} from 'express';
import RecoController from './../controller/reco-controller';

const router = Router();

router.put('/', RecoController.updateResult);
router.post('/send', RecoController.send);
router.post('/send/all', RecoController.sendAll);

export default router;
