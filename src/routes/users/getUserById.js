import { Users } from '../../controllers';

export default async (req, res) => {
  try {
    if (!req.decoded) return res.status(400).send('Bad Data');

    const result = await Users.getById(req.decoded);

    if (!result || result.length === 0) {
      return res.status(404).send('Not Found');
    }

    return res.status(200).send(result);
  } catch (err) {
    return res.status(500).send('Internal Server Error');
  }
};
