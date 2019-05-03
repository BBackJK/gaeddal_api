import db from '../db/db';

import users from './users';
import follow from './follow';

const Users = users(db.sequelize, db.Sequelize);
const Follow = follow(db.sequelize, db.Sequelize);

Users.hasMany(Follow,{
    foreignKey : 'follow_id',
    sourceKey : 'id'
});

Users.hasMany(Follow,{
    foreignKey : 'target_id',
    sourceKey : 'id'
});

export {
    Users,
    Follow
};
