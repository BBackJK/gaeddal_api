import { Send, Users } from '../../models';

export default async (decodeData, paramData) => {
  Send.belongsTo(Users, {
    foreignKey: 'send_id',
    targetKey: 'id',
  });

  const result = await Send.findOne({
    attributes: [
      'id',
      'send_id',
      'recieve_id',
      'contents',
      'lat',
      'lng',
      'readed',
      'sended_at',
    ],
    include: [
      {
        model: Users,
        attributes: ['id', 'email', 'name'],
        where: { removed: 0 },
      },
    ],
    where: { id: paramData.id, recieve_id: decodeData.id, removed: 0 },
    order: [['sended_at', 'DESC']],
  });

  return result;
};
