import { Request, Response } from "express";

export class UserController {
    static changeUserEmail(arg0: string, changeUserEmail: any) {
        throw new Error('Method not implemented.');
    }
    static acceptUserInventory(arg0: string, acceptUserInventory: any) {
        throw new Error('Method not implemented.');
    }
    public static CreateUser = (req: Request, res: Response): void => {
        res.status(501).json({
            success: false,
            message: 'El registro de usuario tovia no esta disponible.'
        });
    };

    public static GetUserByFilter = (req: Request, res: Response): void => {
        res.status(501).json({
            success: false,
            message: 'Obtener el listado completo de usuarios registrados en el sistema no esta disponible.'

        });
    };

    public static GetUserById = (req: Request, res: Response): void => {
        res.status(501).json({
            success: false,
            message: 'Consultar los detalles de un usuario específico mediante su identificador único no esta disponible.'

        });
    };

    public static UpdateUser = (req: Request, res: Response): void => {
        res.status(501).json({
            success: false,
            message: 'Actualizar los datos de un usuario no está disponible.'
        });
    };

    public static ChangeUserStatus = (req: Request, res: Response): void => {
        res.status(501).json({
            success: false,
            message: 'Cambiar el estado (activo/inactivo) de un usuario no está disponible.'
        });
    };

    public static ChangeUserRole = (req: Request, res: Response): void => {
        res.status(501).json({
            success: false,
            message: 'Cambiar el rol de un usuario no está disponible.'
        });
    };
 

}