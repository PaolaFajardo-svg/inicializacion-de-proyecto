import { Router } from 'express';
import loanRoutes from './Loan.routes';
import userRoutes from "./user.routes";
import enviormentRoutes from "./enviorments.routes";

const router = Router();
router.use('/loans', loanRoutes);
router.use("/users", userRoutes);
router.use("/enviorments", enviormentRoutes);
export default router;