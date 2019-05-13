import { Users } from '../../models';

export default async (data) => {
  const emailWhereData = {};

  emailWhereData.email = data.email;
  emailWhereData.removed = 0;

  const emailOverlap = await Users.findOne({ where: emailWhereData });

  if (emailOverlap !== null) return 'email';

  const createData = {};

  createData.email = data.email;
  createData.sns_email = data.sns_email;
  createData.name = data.name;
  createData.phone = data.phone;
  createData.created_at = new Date();

  const result = await Users.create(createData);

  return result;
};
