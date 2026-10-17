import { Router } from 'express';
import { EnviormentController } from '../Controllers/enviorments.controller';

const router = Router();
router.get ('/search', EnviormentController.GetEnviormentsByFilter);
router.post('/',EnviormentController.CreateEnviorment);
router.patch('/:id',EnviormentController.UpdateEnviorment);

export default router;