import { Messages } from '../../models';

export default async (decodeData, bodyData) => {
  const whereData = {};
  const updateData = {};

  whereData.removed = 0;
  whereData.id = bodyData.id;
  whereData.user_id = decodeData.id;

  updateData.category = bodyData.category;
  updateData.contents = bodyData.contents;
  updateData.updated_at = new Date();

  await Messages.update(updateData, { where: whereData });

  whereData.category = bodyData.category;
  whereData.contents = bodyData.contents;

  const result = await Messages.findOne({ where: whereData });

  return result;
};
