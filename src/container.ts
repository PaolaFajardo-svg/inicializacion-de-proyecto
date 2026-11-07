import { InMemoryLoanRepository } from './Repositories/in-memory-loan.repository';
import { LoanService } from './Services/loan.service';

const loanRepository = new InMemoryLoanRepository();
export const loanService = new LoanService(loanRepository);