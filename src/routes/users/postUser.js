import { Users } from '../../controllers';

export default async (req, res) => {
  try {
    if (!req.body.email || !req.body.sns_email || !req.body.name || !req.body.phone) {
      return res.status(400).send('Bad Data');
    }

    const result = await Users.post(req.body);

    if (result === undefined || result === 'email') {
      return res.status(409).send('Already Exist Email');
    }

    return res.status(201).send(result);
  } catch (err) {
    return res.status(500).send('Internal Server Error');
  }
};
