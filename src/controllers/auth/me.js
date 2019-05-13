import { Users } from '../../models';

export default async (data) => {
  const whereData = {};

  whereData.removed = 0;
  whereData.id = data.id;
  whereData.email = data.email;
  whereData.sns_email = data.sns_email;

  const result = await Users.findOne({ where: whereData });

  if (!result) return 'not user';

  return result;
};
