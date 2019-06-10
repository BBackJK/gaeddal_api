import { Alarm } from '../../models';

export default async (decodedData, bodyData) => {
  const whereData = {};
  const updateData = {};

  whereData.id = bodyData.id;
  whereData.user_id = decodedData.id;
  whereData.removed = 0;

  const findResult = await Alarm.findOne({ where: whereData });

  if (!findResult) return 'Empty';

  updateData.title = bodyData.title;
  updateData.date = bodyData.date;
  updateData.time = bodyData.time;
  updateData.status = bodyData.status;
  updateData.updated_at = new Date();

  await Alarm.update(updateData, { where: whereData });

  whereData.title = bodyData.title;
  whereData.date = bodyData.date;
  whereData.time = bodyData.time;

  const result = await Alarm.findOne({ where: whereData });

  return result;
};
