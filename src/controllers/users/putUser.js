import { Users } from '../../models';

export default async (decodeData, bodyData) => {
  const whereData = {};
  const updateData = {};

  updateData.updated_at = new Date();
  updateData.name = bodyData.name;

  whereData.removed = 0;
  whereData.id = decodeData.id;

  await Users.update(updateData, { where: whereData });

  whereData.name = bodyData.name;

  const result = await Users.findOne({ where: whereData });

  return result;
};
