import { Router } from 'express';
import loanRoutes from './Loan.routes';

const router = Router();
router.use('/loans', loanRoutes);

export default router;