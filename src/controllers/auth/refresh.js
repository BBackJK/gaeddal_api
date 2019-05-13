import jwt from 'jsonwebtoken';

import { Users } from '../../models';

export default async (data) => {
  const whereData = {};

  whereData.removed = 0;
  whereData.id = data.id;
  whereData.email = data.email;
  whereData.sns_email = data.sns_email;

  const result = await Users.findOne({ where: whereData });

  if (!result) return 'not user';

  const payload = {
    id: result.dataValues.id,
    email: result.dataValues.email,
    sns_email: result.dataValues.sns_email,
  };

  const secretOrPrivateKey = process.env.JWT_SECRET;

  const options = { expiresIn: 60 * 60 * 24 };

  const token = jwt.sign(payload, secretOrPrivateKey, options);

  return token;
};
