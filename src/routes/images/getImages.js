import { Images } from '../../controllers';

export default async (req, res) => {
  try {
    if (!req.decoded) return res.status(400).send('Bad Data');

    const result = await Images.get(req.decoded);

    return !result
      ? res.status(404).send('Not Found')
      : res.status(200).send(result);
  } catch (err) {
    return res.status(500).send('Internal Server Error');
  }
};
