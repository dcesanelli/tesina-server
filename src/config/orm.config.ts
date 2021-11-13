import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { config } from 'dotenv';
import { join } from 'path';
config();

const ormConfig: PostgresConnectionOptions = {
  type: 'postgres',
  host: process.env.DBHOST,
  port: parseInt(process.env.DBPORT),
  username: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  database: process.env.DBNAME,
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
  synchronize: false,
  migrationsRun: true,
  logging: true,
  migrationsTableName: 'migrations',
  migrations: [join(__dirname, '/../migration/**/*{.ts,.js}')],
  entities: [join(__dirname, '/../**/*.entity{.ts,.js}')],
  cli: {
    migrationsDir: 'src/migration',
  },
};
console.log(ormConfig);
export = ormConfig;
