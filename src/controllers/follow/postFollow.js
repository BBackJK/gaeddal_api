import { Users, Follow } from '../../models';

export default async (decodeData, bodyData) => {
  const userFindData = {};

  userFindData.id = bodyData.id;
  userFindData.email = bodyData.email;
  userFindData.name = bodyData.name;
  userFindData.removed = 0;

  const findData = await Users.findOne({ where: userFindData });

  if (!findData) return 'Empty';

  const followcheckData = {};
  const followpostData = {};

  followcheckData.target_id = decodeData.id;
  followcheckData.follow_id = bodyData.id;
  followcheckData.removed = 0;

  const findResult = await Follow.findOne({ where: followcheckData });

  if (findResult) return 'already exist';

  followpostData.follow_id = decodeData.id;
  followpostData.target_id = bodyData.id;
  followpostData.followed_at = new Date();

  const result = await Follow.create(followpostData);

  return result;
};
