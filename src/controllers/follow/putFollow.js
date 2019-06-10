import { Users, Follow } from '../../models';

export default async (decodeData, bodyData) => {
  const userFindData = {};

  userFindData.removed = 0;
  userFindData.id = bodyData.user_id;
  userFindData.email = bodyData.email;
  userFindData.name = bodyData.name;

  const findData = await Users.findOne({ where: userFindData });

  if (!findData) return 'Empty';

  const whereData = {};
  const updateData = {};

  whereData.removed = 0;
  whereData.target_id = decodeData.id;
  whereData.follow_id = bodyData.user_id;
  whereData.id = bodyData.id;
  whereData.acceptanced = 0;

  updateData.acceptanced = 1;
  updateData.acceptanced_at = new Date();

  const result = await Follow.update(updateData, { where: whereData });

  whereData.acceptanced = 1;

  return result > 0 ? Follow.findOne({ where: whereData }) : 'not found';
};
