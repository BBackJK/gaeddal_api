import { Follow } from '../../controllers';

export default async (req, res) => {
  try {
    if (!req.decoded) return res.status(400).send('Bad Data');

    const byFollow = await Follow.getByFollow(req.decoded);
    const byTarget = await Follow.getByTarget(req.decoded);

    if (byFollow === 'not found' || byTarget === 'not found') {
      return res.status(404).send('Not Found');
    }

    const result = byFollow.concat(byTarget);

    // eslint-disable-next-line no-nested-ternary
    result.sort((a, b) => (a.id > b.id ? -1 : a.id < b.id ? 1 : 0));

    return res.status(200).send(result);
  } catch (err) {
    return res.status(500).send('Internal Server Error');
  }
};
