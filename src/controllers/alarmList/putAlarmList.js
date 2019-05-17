import { AlarmList } from '../../models';

export default async (decodeData, bodyData) => {
  const updateData = {};
  const whereData = {};

  updateData.updated_at = new Date();
  updateData.title = bodyData.title;

  whereData.id = bodyData.id;
  whereData.user_id = decodeData.id;
  whereData.removed = 0;

  await AlarmList.update(updateData, { where: whereData });

  whereData.title = bodyData.title;

  const result = await AlarmList.findOne({ where: whereData });

  return result;
};
