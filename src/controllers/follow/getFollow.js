import { Users, Follow } from '../../models';

export default async (decodeData) => {
  Follow.belongsTo(Users, {
    foreignKey: 'follow_id',
    targetKey: 'id',
  });

  const result = await Follow.findAll({
    attributes: ['id', 'follow_id', 'target_id', 'acceptanced', 'followed_at'],
    include: [
      {
        model: Users,
        attributes: ['id', 'email', 'name'],
        where: { removed: 0 },
      },
    ],
    where: { target_id: decodeData.id, removed: 0, acceptanced: 0 },
    order: [['followed_at', 'DESC']],
  });

  return result;
};
