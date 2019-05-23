import { Users, Follow } from '../../models';

export default async (decodeData) => {
  Follow.belongsTo(Users, {
    foreignKey: 'target_id',
    targetKey: 'id',
  });

  const byFollow = await Follow.findAll({
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
    where: { follow_id: decodeData.id, removed: 0, acceptanced: 1 },
    order: [['acceptanced_at', 'DESC']],
  });

  if (!byFollow) return 'not found';

  return byFollow;
};
