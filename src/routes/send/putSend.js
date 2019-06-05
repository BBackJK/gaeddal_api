import { Send } from '../../controllers';

export default async (req, res) => {
  try {
    if (!req.decoded || !req.body.id || !req.body.send_id) {
      return res.status(400).send('Bad Data');
    }

    const result = await Send.put(req.decoded, req.body);

    return result === 'Empty'
      ? res.status(404).send('Not Found')
      : res.status(200).send(result);
  } catch (err) {
    return res.status(500).send('Internal Server Error');
  }
};
