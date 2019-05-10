import { Follow } from '../../controllers';

export default async (req, res) => {
  try {
    if (!req.body.id || !req.body.email) {
      return res.status(400).send('Bad Data');
    }

    const result = await Follow.post(req.body);

    if (!result || result === 'not found') {
      return res.status(404).send('Not Found');
    }

    if (result === 'already exist') {
      return res.status(409).send('Already Exist');
    }

    return res.status(201).send(result);
  } catch (err) {
    return res.status(500).send('Internal Server Error');
  }
};
