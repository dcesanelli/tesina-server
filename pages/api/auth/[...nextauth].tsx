import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
    providers: [
        Providers.Credentials({
            name: 'Credentials',
            credentials: {
                username: { label: "Email", type: "text", placeholder: "email" },
                password: { label: "Password", type: "password" }
            },
            authorize: async (credentials) => {
                const user = { id: 1, name: 'Daniel C', email: 'daniel@cesanelli.com.ar' }

                if (user) {
                    return Promise.resolve(user)
                } else {
                    return Promise.resolve(null)
                }
            }
        })
    ],
    database: process.env.DATABASE_URL,
    session: {
        jwt: true,
    },
    secret: 'abcdef123456789',
    jwt: {
        encryption: true,
    },
    callbacks: {
        // signIn: async (user, account, profile) => {
        //     return true
        // },
    },
    debug: false,
}

const Auth = (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options)

export default Auth