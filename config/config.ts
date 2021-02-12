export default {
    nodeEnv: process.env.NODE_ENV || 'development',
    dbUri: process.env.DATABASE_URL || '',
    jwtSecret: process.env.JWT_SECRET || ''
};