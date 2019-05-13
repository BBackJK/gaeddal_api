import { Follow } from '../../models';
import db from '../../db/db';

export default async (decodeData, paramData) => {
  const { Op } = db.Sequelize;

  const whereData = {
    acceptanced: 1,
    removed: 0,
    [Op.and]: [
      { [Op.or]: [{ follow_id: decodeData.id }, { follow_id: decodeData.id }] },
      { [Op.or]: [{ target_id: paramData.id }, { target_id: paramData.id }] },
    ],
  };

  const updateData = {};

  updateData.removed = 1;
  updateData.acceptanced = 0;
  updateData.acceptanced_at = null;
  updateData.removed_at = new Date();

  const updateResult = await Follow.update(updateData, { where: whereData });

  if (updateResult[0] === 0) return null;

  whereData.removed = 1;
  whereData.acceptanced = 0;
  whereData.acceptanced_at = null;

  const result = await Follow.findOne({ where: whereData });

  return result;
};
