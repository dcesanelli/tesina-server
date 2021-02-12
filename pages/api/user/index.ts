import { Role, User } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';

import UserService from '../../../services/UserService';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        const users = await UserService.getUsers();
        res.status(200).json(users);
    } else if (req.method === 'POST') {
        try {
            const { email, password, firstname, lastname, dob } = req.body.user;
            const userDto = await UserService.createUser(email, password, firstname, lastname, dob, Role.USER);
            res.status(200).json(userDto);
        } catch (error) {
            if (error.code === 'P2002') {
                res.status(500).json({ error: 'El usuario ya existe' });
            } else {
                res.status(500).json({ error });
            }
        }
    } else if (req.method === 'DELETE') {
        try {
            const { id } = req.body.user;
            const userDto = await UserService.deleteUser(id);
            res.status(200).json(userDto);
        } catch (error) {
            if (error.code === 'P2016') {
                res.status(500).json({ error: 'El usuario ya existe' });
            } else {
                res.status(500).json({ error });
            }
        }
    } else {
        throw new Error(
            `El método HTTP ${req.method} no está soportado en esta ruta.`
        );
    }
};
