import { Follow } from '../../models';

export default async (decodeData, paramData) => {
  const whereData = {};
  const updateData = {};

  whereData.removed = 0;
  whereData.id = paramData.id;

  updateData.removed = 1;
  updateData.removed_at = new Date();

  await Follow.update(updateData, { where: whereData });

  whereData.removed = 1;

  const result = await Follow.findOne({ where: whereData });

  return result;
};
