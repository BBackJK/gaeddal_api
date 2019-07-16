import { AlarmList } from '../../models';

export default async (decodeData, paramData) => {
  const whereData = {};

  whereData.removed = 0;
  whereData.user_id = decodeData.id;
  whereData.id = paramData.id;

  const result = await AlarmList.findOne({ where: whereData });

  return result;
};
