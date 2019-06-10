import { Alarm } from '../../models';

export default async (decodeData, paramData) => {
  const whereData = {};
  const updateData = {};

  whereData.removed = 0;
  whereData.id = paramData.id;
  whereData.user_id = decodeData.id;

  const findResult = await Alarm.findOne({ where: whereData });

  if (!findResult) return 'Empty';

  updateData.removed = 1;
  updateData.removed_at = new Date();

  await Alarm.update(updateData, { where: whereData });

  whereData.removed = 1;

  const result = await Alarm.findOne({ where: whereData });

  return result;
};
