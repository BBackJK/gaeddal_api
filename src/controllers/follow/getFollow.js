import { Users, Follow } from '../../models';

export default async (data) => {
  const followFindData = {};

  followFindData.target_id = data.id;
  followFindData.acceptanced = 0;
  followFindData.removed = 0;

  const findData = await Follow.findAll({ attributes: ['follow_id'], where: followFindData, order: [['followed_at', 'DESC']] });

  if (findData.length > 0) {
    const insertArray = [];

    for (const i in findData) {
      insertArray.push(findData[i].dataValues.follow_id);
    }

    const whereData = {};

    whereData.id = insertArray;
    whereData.removed = 0;

    const result = await Users.findAll({ attributes: ['id', 'name', 'email'], where: whereData });

    return result.length > 0 ? result : 'not found';
  } return findData;
};
