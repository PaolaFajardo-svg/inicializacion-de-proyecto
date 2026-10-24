import { Router } from 'express';
import { LoanController } from '../Controllers/loan.controller'
import { validateLoanPayload } from '../Middlewares/validateLoan.middleware';

const router = Router();

router.post('/', LoanController.createLoan);
router.get('/search', LoanController.getLoansByFilter);
router.get('/:id', LoanController.getLoanById);
router.put('/:id/accept', LoanController.acceptLoanInventory);
router.post('/', validateLoanPayload, LoanController.getLoansByFilter)

export default router;