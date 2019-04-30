import db from '../db/db';

import users from './users';

const Users = users(db.sequelize, db.Sequelize);

export {
    Users
};
