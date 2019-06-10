import { Messages } from '../../models';

export default async (decodeData, paramData) => {
  const whereData = {};
  const updateData = {};

  whereData.id = paramData.id;
  whereData.user_id = decodeData.id;
  whereData.removed = 0;

  updateData.removed = 1;
  updateData.removed_at = new Date();

  await Messages.update(updateData, { where: whereData });

  whereData.removed = 1;

  const result = await Messages.findOne({ where: whereData });

  return result;
};
