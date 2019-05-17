import { AlarmList } from '../../models';

export default async (data) => {
  const whereData = {};

  whereData.removed = 0;
  whereData.user_id = data.id;

  const result = await AlarmList.findAll({ where: whereData });

  return result;
};
