import type { NextApiRequest, NextApiResponse } from 'next';
import * as jwt from "jsonwebtoken";

import config from '../../../config/config';
import UserService from '../../../services/UserService';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const user = await UserService.login(req.body.email, req.body.password);
    if (user) {
        user.token = jwt.sign(user, config.jwtSecret, { expiresIn: '10d' });
    }
    res.status(200).json(user);
};
