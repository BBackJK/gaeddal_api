import { Users } from '../../models';

export default async (data) => {
  const whereData = {};

  whereData.removed = 0;
  whereData.phone = data.phone;

  const result = await Users.findAll({ where: whereData });

  return result;
};
