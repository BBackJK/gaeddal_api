import { Images } from '../../models';

export default async (decodeData, fileData) => {
  const whereData = {};
  const updateData = {};

  whereData.user_id = decodeData.id;
  whereData.removed = 0;

  updateData.key = fileData.key;
  updateData.updated_at = new Date();

  await Images.update(updateData, { where: whereData });

  whereData.key = fileData.key;

  const result = await Images.findOne({ where: whereData });

  return result;
};
