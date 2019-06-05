import { Images } from '../../models';

export default async (decodeData, bodyData) => {
  const whereData = {};
  const updateData = {};

  whereData.user_id = decodeData.id;
  whereData.id = bodyData.id;
  whereData.removed = 0;

  updateData.key = 'basic';
  updateData.updated_at = new Date();

  await Images.update(updateData, { where: whereData });

  whereData.key = 'basic';

  const result = await Images.findOne({ where: whereData });

  return result;
};
