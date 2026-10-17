import { Router } from 'express';
import { IncidentController } from '../Controllers/incidents.controller';

const router = Router();

router.get('/history', IncidentController.GetIncidentHistory);
router.post('/', IncidentController.CreateIncident);
router.patch('/:id/status', IncidentController.UpdateIncidentStatus);

export default router;