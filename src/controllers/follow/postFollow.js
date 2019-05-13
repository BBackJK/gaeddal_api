import { Users, Follow } from '../../models';

export default async (decodeData, bodyData) => {
  const userFindData = {};

  userFindData.email = bodyData.email;
  userFindData.removed = 0;

  const findData = await Users.findOne({
    attributes: ['id'],
    where: userFindData,
  });

  if (findData) {
    const followBody = {};

    followBody.target_id = decodeData.id;
    followBody.follow_id = findData.dataValues.id;

    const preResult = await Follow.findOne({ where: followBody });

    if (preResult) return 'already exist';

    followBody.follow_id = decodeData.id;
    followBody.target_id = findData.dataValues.id;
    followBody.followed_at = new Date();

    const result = await Follow.create(followBody);

    return result;
  }

  return 'not found';
};
