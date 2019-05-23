import { Users, Follow } from '../../models';

export default async (decodeData) => {
  Follow.belongsTo(Users, {
    foreignKey: 'follow_id',
    targetKey: 'id',
  });

  const byTarget = await Follow.findAll({
    attributes: [
      'id',
      'follow_id',
      'target_id',
      'acceptanced',
      'followed_at',
      'acceptanced_at',
    ],
    include: [
      {
        model: Users,
        attributes: ['id', 'email', 'name'],
        where: { removed: 0 },
      },
    ],
    where: { target_id: decodeData.id, removed: 0, acceptanced: 1 },
    order: [['acceptanced_at', 'DESC']],
  });

  if (!byTarget) return 'not found';

  return byTarget;
};
