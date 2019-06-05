import { Users, Images } from '../../models';
import db from '../../db/db';

export default async (bodyData) => {
  const emailWhereData = {};

  emailWhereData.email = bodyData.email;
  emailWhereData.removed = 0;

  const emailOverlap = await Users.findOne({ where: emailWhereData });

  if (emailOverlap !== null) return 'email';

  const createData = {};

  createData.email = bodyData.email;
  createData.sns_email = bodyData.sns_email;
  createData.name = bodyData.name;
  createData.phone = bodyData.phone;
  createData.created_at = new Date();

  const result = await db.sequelize.transaction(async (t) => {
    const userCreate = await Users.create(createData, { transaction: t });

    await Images.create(
      {
        user_id: userCreate.dataValues.id,
        created_at: new Date(),
      },
      { transaction: t },
    );

    return userCreate;
  });

  return result;
};
