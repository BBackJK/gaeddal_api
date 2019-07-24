import db from '../database/database';

import users from './users';
import follow from './follow';
import messages from './messages';
import send from './send';
import alarmList from './alarmList';
import images from './images';
import alarm from './alarm';

const Users = users(db.sequelize, db.Sequelize);
const Follow = follow(db.sequelize, db.Sequelize);
const Messages = messages(db.sequelize, db.Sequelize);
const Send = send(db.sequelize, db.Sequelize);
const AlarmList = alarmList(db.sequelize, db.Sequelize);
const Images = images(db.sequelize, db.Sequelize);
const Alarm = alarm(db.sequelize, db.Sequelize);

Users.hasMany(Follow, {
  foreignKey: 'follow_id',
  sourceKey: 'id',
});

Users.hasMany(Follow, {
  foreignKey: 'target_id',
  sourceKey: 'id',
});

Users.hasMany(Messages, {
  foreignKey: 'user_id',
  sourceKey: 'id',
});

Users.hasMany(Send, {
  foreignKey: 'send_id',
  sourceKey: 'id',
});

Users.hasMany(Send, {
  foreignKey: 'receive_id',
  sourceKey: 'id',
});

Users.hasMany(AlarmList, {
  foreignKey: 'user_id',
  sourceKey: 'id',
});

Users.hasOne(Images, {
  foreignKey: 'user_id',
  sourceKey: 'id',
});

Users.hasMany(Alarm, {
  foreignKey: 'user_id',
  sourceKey: 'id',
});

export {
 Users, Follow, Messages, Send, AlarmList, Images, Alarm 
};
