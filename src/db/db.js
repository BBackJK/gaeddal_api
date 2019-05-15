import Sequelize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config({ path: 'config-dev.env' });

const db = {};

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
  },
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
