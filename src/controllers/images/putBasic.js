import { Images } from '../../models';

export default async (decodedData, bodyData) => {
  const whereData = {};
  const updateData = {};

  whereData.user_id = decodedData.id;
  whereData.id = bodyData.id;
  whereData.removed = 0;

  updateData.key = 'basic';
  updateData.updated_at = new Date();

  await Images.update(updateData, { where: whereData });

  whereData.key = 'basic';

  const result = await Images.findOne({ where: whereData });

  return result;
};
