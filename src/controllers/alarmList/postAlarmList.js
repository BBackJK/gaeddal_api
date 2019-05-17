import { AlarmList } from '../../models';

export default async (decodeData, bodyData) => {
  const insertData = {};

  insertData.user_id = decodeData.id;
  insertData.title = bodyData.title;
  insertData.created_at = new Date();

  const result = await AlarmList.create(insertData);

  return result;
};
