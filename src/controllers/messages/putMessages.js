import { Messages } from '../../models';

export default async (data) => {
  const whereData = {};
  const updateData = {};

  whereData.removed = 0;
  whereData.id = data.id;
  whereData.user_id = data.user_id;

  updateData.category = data.category;
  updateData.contents = data.contents;
  updateData.updated_at = new Date();

  await Messages.update(updateData, { where: whereData });

  whereData.category = data.category;
  whereData.contents = data.contents;

  const result = await Messages.findOne({ where: whereData });

  return result;
};
