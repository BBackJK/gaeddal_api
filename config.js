import dotenv from 'dotenv';

dotenv.config({ path: 'config.env' });

const production = process.env.NODE_ENV === 'production';

export default {
  server: {
    port: process.env.PORT || 8000,
    production: !!production,
  },
  database: {
    name: process.env.DATABASE_NAME || 'gaeddal',
    user: process.env.DATABASE_USER || 'root',
    password: process.env.DATABASE_PASSWORD || 'test',
    host: process.env.DATABASE_HOST || 'localhost',
    timezone: 'Asia/Seoul',
    dialect: 'mysql',
    sync: false,
    define: {
      engine: 'InnoDB',
      charset: 'utf8',
      collate: 'utf8_unicode_ci',
    },
  },
  cloud: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
    bucket: process.env.AWS_BUCKET,
  },
  email: {
    user: process.env.EMAIL_USER,
    password: process.env.EMAIL_PASSWORD,
  },
  auth: {
    secret: process.env.JWT_SECRET,
  },
};
