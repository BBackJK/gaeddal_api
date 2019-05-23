import { Follow } from '../../controllers';

export default async (req, res) => {
  try {
    if (
      !req.decoded
      || !req.body.id
      || !req.body.user_id
      || !req.body.email
      || !req.body.name
    ) {
      return res.status(400).send('Bad data');
    }

    const result = await Follow.put(req.decoded, req.body);

    return result === 'not found'
      ? res.status(404).send('Not Found')
      : res.status(200).send(result);
  } catch (err) {
    return res.status(500).send('Internal Server Error');
  }
};
