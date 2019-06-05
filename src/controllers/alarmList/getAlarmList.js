import { AlarmList } from '../../models';

export default async (decodeData) => {
  const whereData = {};

  whereData.removed = 0;
  whereData.user_id = decodeData.id;

  const result = await AlarmList.findAll({ where: whereData });

  return result;
};
