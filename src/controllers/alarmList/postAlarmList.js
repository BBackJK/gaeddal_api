import { AlarmList, Users } from '../../models';

export default async (decodeData, bodyData) => {
  const whereData = {};
  const insertData = {};

  whereData.id = decodeData.id;
  whereData.removed = 0;

  const findResult = await Users.findOne({ where: whereData });

  if (!findResult) return 'Empty';

  insertData.user_id = decodeData.id;
  insertData.title = bodyData.title;
  insertData.created_at = new Date();

  const result = await AlarmList.create(insertData);

  return result;
};
