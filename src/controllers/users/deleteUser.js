import { Users } from '../../models';

export default async (decodeData) => {
  const whereData = {};
  const updateData = {};

  whereData.removed = 0;
  whereData.id = decodeData.id;
  whereData.email = decodeData.email;
  whereData.sns_email = decodeData.sns_email;

  updateData.removed_at = new Date();
  updateData.removed = 1;

  await Users.update(updateData, { where: whereData });

  whereData.removed = 1;

  const result = await Users.findOne({ where: whereData });

  return result;
};
