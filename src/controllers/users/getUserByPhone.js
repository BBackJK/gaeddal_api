import { Users } from '../../models';

export default async (paramData) => {
  const whereData = {};

  whereData.removed = 0;
  whereData.phone = paramData.phone;

  const result = await Users.findAll({ where: whereData });

  return result;
};
