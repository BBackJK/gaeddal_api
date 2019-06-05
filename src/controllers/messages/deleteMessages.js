import { Messages } from '../../models';

export default async (decodeData, bodyData) => {
  const whereData = {};
  const updateData = {};

  whereData.id = bodyData.id;
  whereData.user_id = decodeData.id;
  whereData.removed = 0;

  updateData.removed = 1;
  updateData.removed_at = new Date();

  await Messages.update(updateData, { where: whereData });

  whereData.removed = 1;

  const result = Messages.findOne({ where: whereData });

  return result;
};
