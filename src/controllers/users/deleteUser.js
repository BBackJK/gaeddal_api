import {
  Users,
  Images,
  Messages,
  Alarm,
  AlarmList,
  Follow,
} from '../../models';
import db from '../../database/database';

export default async (decodeData) => {
  const { Op } = db.Sequelize;
  const whereData = {};
  const updateData = {};

  whereData.removed = 0;
  whereData.id = decodeData.id;
  whereData.email = decodeData.email;
  whereData.sns_email = decodeData.sns_email;

  updateData.removed_at = new Date();
  updateData.removed = 1;

  await db.sequelize.transaction(async (t) => {
    await Users.update(updateData, {
      where: whereData,
      transaction: t,
    });

    await Follow.update(updateData, {
      where: {
        [Op.or]: [{ follow_id: decodeData.id }, { target_id: decodeData.id }],
        removed: 0,
      },
      transaction: t,
    });

    await Images.update(updateData, {
      where: {
        user_id: decodeData.id,
        removed: 0,
      },
      transaction: t,
    });

    await Messages.update(updateData, {
      where: {
        user_id: decodeData.id,
        removed: 0,
      },
      transaction: t,
    });

    await AlarmList.update(updateData, {
      where: {
        user_id: decodeData.id,
        removed: 0,
      },
      transaction: t,
    });

    await Alarm.update(updateData, {
      where: {
        user_id: decodeData.id,
        removed: 0,
      },
      transaction: t,
    });
  });

  whereData.removed = 1;

  const result = await Users.findOne({ where: whereData });

  return result;
};
