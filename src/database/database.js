import Sequelize from 'sequelize';

const { database } = require('../../config').default;

const db = {};

const sequelize = new Sequelize(
  database.name,
  database.user,
  database.password,
  {
    host: database.host,
    dialect: database.dialect,
    define: database.define,
  },
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
