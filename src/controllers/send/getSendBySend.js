import { Send, Users } from '../../models';

export default async (data) => {
  Send.belongsTo(Users, {
    foreignKey: 'recieve_id',
    targetKey: 'id',
  });

  const result = await Send.findAll({
    include: [{
      model: Users,
      attributes: ['id', 'email', 'name'],
    }],
    where: { send_id: data.id, removed: 0 },
    order: [['sended_at', 'DESC']],
  });

  return result;
};
