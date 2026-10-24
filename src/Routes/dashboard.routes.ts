import { Router } from 'express';
import { DashboardController } from '../Controllers/dashboard.controller';

const router = Router();

router.get('/summary', DashboardController.GetSummary);

export default router;
