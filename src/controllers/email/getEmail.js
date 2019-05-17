import { Users } from '../../models';

export default async (decodeData) => {
  const whereData = {};

  whereData.removed = 0;
  whereData.email = decodeData.email;
  whereData.id = decodeData.id;

  const result = await Users.findOne({ where: whereData });

  return result;
};
