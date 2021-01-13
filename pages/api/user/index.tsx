import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/client'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getSession({ req })
    switch (req.method) {
        case 'GET':
            if (session)
                res.status(200).json({ name: 'GET JOHN' })
            else
                res.status(401)
            break;
        case 'POST':
            res.status(200).json({ name: 'POST JOHN' })
            break;
        default:
            res.status(401)
            break;
    }
}