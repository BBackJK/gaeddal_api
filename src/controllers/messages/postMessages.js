import { Messages, Users } from '../../models';

export default async (decodeData, bodyData) => {
  const whereData = {};
  const insertData = {};

  whereData.id = decodeData.id;
  whereData.removed = 0;

  const findResult = await Users.findOne({ where: whereData });

  if (!findResult) return 'Empty';

  insertData.user_id = decodeData.id;
  insertData.category = bodyData.category;
  insertData.contents = bodyData.contents;
  insertData.created_at = new Date();

  const result = await Messages.create(insertData);

  return result;
};
