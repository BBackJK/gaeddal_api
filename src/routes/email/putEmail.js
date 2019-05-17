import { Email } from '../../controllers';
import { Random } from '../../util';

export default async (req, res) => {
  try {
    if (!req.decoded || !req.body.auth) return res.status(400).send('Bad Data');

    if (req.body.auth !== Random.getNumber()) {
      return res.status(409).send('Not Auth Number');
    }

    const result = await Email.put(req.decoded);

    return !result
      ? res.status(404).send('Not Found')
      : res.status(200).send(result);
  } catch (err) {
    return res.status(500).send('Internal Server Error');
  }
};
