import jwt from 'jsonwebtoken';

import { Users } from '../../models';

const { auth } = require('../../../config').default;

export default async (decodeData) => {
  const whereData = {};

  whereData.removed = 0;
  whereData.id = decodeData.id;
  whereData.email = decodeData.email;
  whereData.sns_email = decodeData.sns_email;

  const result = await Users.findOne({ where: whereData });

  if (!result) return 'not user';

  const payload = {
    id: result.dataValues.id,
    email: result.dataValues.email,
    sns_email: result.dataValues.sns_email,
  };

  const secretOrPrivateKey = auth.secret;

  const options = { expiresIn: 60 * 60 * 24 };

  const token = jwt.sign(payload, secretOrPrivateKey, options);

  return token;
};
