import { Messages } from '../../models';

export default async (decodeData, bodyData) => {
  const insertData = {};

  insertData.user_id = decodeData.id;
  insertData.category = bodyData.category;
  insertData.contents = bodyData.contents;
  insertData.created_at = new Date();

  const result = await Messages.create(insertData);

  return result;
};
