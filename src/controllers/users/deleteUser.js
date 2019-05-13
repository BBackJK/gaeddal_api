import { Users } from '../../models';

export default async (data) => {
  const whereData = {};
  const updateData = {};

  whereData.removed = 0;
  whereData.id = data.id;
  whereData.email = data.email;
  whereData.sns_email = data.sns_email;

  updateData.removed_at = new Date();
  updateData.removed = 1;

  await Users.update(updateData, { where: whereData });

  whereData.removed = 1;

  const result = await Users.findOne({ where: whereData });

  return result;
};
