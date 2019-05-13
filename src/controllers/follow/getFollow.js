import { Users, Follow } from '../../models';

export default async (data) => {
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
      },
    ],
    where: { target_id: data.id, removed: 0, acceptanced: 0 },
    order: [['followed_at', 'DESC']],
  });

  return result;
};
