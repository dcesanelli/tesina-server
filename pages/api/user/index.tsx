import type { NextApiRequest, NextApiResponse } from 'next';
import { getRepository } from 'typeorm';
import type { User } from '../../../models/entities/User';


export default async (req: NextApiRequest, res: NextApiResponse) => {
    const session = true;
    switch (req.method) {
        case 'GET':
            const usersRepo = getRepository(User);
            if (session) {
                const users = await usersRepo.find();
                res.status(200).json(users);
            }
            else
                res.status(401);
            break;
        case 'POST':
            res.status(200).json({ name: 'POST JOHN' });
            break;
        default:
            res.status(401);
            break;
    }
};
