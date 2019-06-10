import { AlarmList } from '../../models';

export default async (decodeData, paramData) => {
  const whereData = {};
  const updateData = {};

  whereData.removed = 0;
  whereData.id = paramData.id;
  whereData.user_id = decodeData.id;

  const findResult = await AlarmList.findOne({ where: whereData });

  if (!findResult) return 'Empty';

  updateData.removed_at = new Date();
  updateData.removed = 1;

  await AlarmList.update(updateData, { where: whereData });

  whereData.removed = 1;

  const result = await AlarmList.findOne({ where: whereData });

  return result;
};
