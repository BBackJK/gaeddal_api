import { Alarm } from '../../models';

export default async (decodeData) => {
  const whereData = {};

  whereData.user_id = decodeData.id;
  whereData.removed = 0;

  const result = await Alarm.findAll({ where: whereData });

  return result;
};
