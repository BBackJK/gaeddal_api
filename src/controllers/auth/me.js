import { Users } from '../../models';

export default async (decodeData) => {
  const whereData = {};

  whereData.removed = 0;
  whereData.id = decodeData.id;
  whereData.email = decodeData.email;
  whereData.sns_email = decodeData.sns_email;

  const result = await Users.findOne({ where: whereData });

  if (!result) return 'not user';

  return result;
};
