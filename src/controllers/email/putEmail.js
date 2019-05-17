import { Users } from '../../models';

export default async (decodeData) => {
  const whereData = {};
  const updateData = {};

  updateData.auth_at = new Date();
  updateData.auth_email = 1;

  whereData.id = decodeData.id;
  whereData.email = decodeData.email;
  whereData.sns_email = decodeData.sns_email;
  whereData.removed = 0;

  await Users.update(updateData, { where: whereData });

  whereData.auth_email = 1;

  const result = await Users.findOne({ where: whereData });

  return result;
};
