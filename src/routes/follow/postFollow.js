import { Follow } from '../../controllers';

export default async (req, res) => {
  try {
    if (
      !req.decoded
      || !req.body.email
      || !req.body.name
      || !req.body.id
      || req.body.id === req.decoded.id
    ) {
      return res.status(400).send('Bad Data');
    }

    const result = await Follow.post(req.decoded, req.body);

    if (!result || result === 'Empty') {
      return res.status(404).send('Not Found');
    }
    return result === 'already exist'
      ? res.status(409).send('Already Exist')
      : res.status(201).send(result);
  } catch (err) {
    return res.status(500).send('Internal Server Error');
  }
};
