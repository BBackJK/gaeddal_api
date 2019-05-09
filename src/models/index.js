import db from '../db/db';

import users from './users';
import follow from './follow';
import messages from './messages';
import send from './send';

const Users = users(db.sequelize, db.Sequelize);
const Follow = follow(db.sequelize, db.Sequelize);
const Messages = messages(db.sequelize, db.Sequelize);
const Send = send(db.sequelize, db.Sequelize);

Users.hasMany(Follow, {
    foreignKey : 'follow_id',
    sourceKey : 'id'
});

Users.hasMany(Follow, {
    foreignKey : 'target_id',
    sourceKey : 'id'
});

Users.hasMany(Messages, {
    foreignKey : 'user_id',
    sourceKey : 'id'
});

Users.hasMany(Send, {
    foreignKey : 'send_id',
    sourceKey : 'id'
});

Users.hasMany(Send, {
    foreignKey : 'recieve_id',
    sourceKey : 'id'
});

Send.belongsTo(Users, {
    foreignKey : 'recieve_id',
    targetKey : 'id'
});

export {
    Users,
    Follow,
    Messages,
    Send
};
