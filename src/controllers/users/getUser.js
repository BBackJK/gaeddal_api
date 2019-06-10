import { Users } from '../../models';

export default async (data) => {
  const whereData = {};

  whereData.removed = 0;
  whereData.id = data.id;

  const result = await Users.findOne({ where: whereData });

  return result;
};
