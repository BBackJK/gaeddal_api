import { Users, Follow } from '../../models';

export default async (data) => {
  const userFindData = {};

  userFindData.email = data.email;
  userFindData.name = data.name;
  userFindData.removed = 0;

  const findData = await Users.findOne({ attributes: ['id'], where: userFindData });

  if (findData) {
    const whereData = {};
    const updateData = {};

    whereData.target_id = data.id;
    whereData.follow_id = findData.dataValues.id;
    whereData.removed = 0;

    updateData.acceptanced = 1;
    updateData.acceptanced_at = new Date();

    const result = await Follow.update(updateData, { where: whereData });

    return result > 0 ? Follow.findOne({ where: whereData }) : 'not found';
  } return 'not found';
};
