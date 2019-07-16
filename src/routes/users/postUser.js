import { isEmail, isMobilePhone, isLength } from 'validator';

import { Users } from '../../controllers';

export default async (req, res) => {
  try {
    if (
      !req.body.email
      || !req.body.sns_email
      || !req.body.name
      || !req.body.phone
      || !isEmail(req.body.email)
      || !isMobilePhone(req.body.phone)
      || !isLength(req.body.phone, { min: 11, max: 11 })
    ) {
      return res.status(400).send('Bad Data');
    }

    const result = await Users.post(req.body);

    return result === 'email'
      ? res.status(409).send('Already Exist Email')
      : res.status(201).send(result);
  } catch (err) {
    return res.status(500).send('Internal Server Error');
  }
};
