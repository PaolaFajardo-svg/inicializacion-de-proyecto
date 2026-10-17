import { Router } from "express";
import {UserController} from '../Controllers/user.controller';

const router = Router();
 
router.get('/search', UserController.GetUserByFilter);
router.get('/:id', UserController.GetUserById);
router.post('/', UserController.CreateUser);
router.put('/:id', UserController.UpdateUser);
router.patch('/:id/status', UserController.ChangeUserStatus);
router.patch('/:id/role', UserController.ChangeUserRole);

export default router;
