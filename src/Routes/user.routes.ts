import { Router } from 'express';
import { UserController } from '../Controllers/user.controller';
import { validateCreateUserPayload } from '../Middlewares/validateUser.middleware';

const router = Router();

router.get('/search', UserController.GetUserByFilter);
router.post('/', validateCreateUserPayload, UserController.CreateUser);
router.put('/:id/accept', UserController.acceptUserInventory);
router.get('/:id', UserController.GetUserById);
router.patch('/:id/accept',UserController.changeUserEmail)
router.patch('/:id/status',UserController.ChangeUserStatus)

export default router;
