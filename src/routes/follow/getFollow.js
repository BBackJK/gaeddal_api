import { Follow } from '../../controllers';

export default async (req, res) => {
  try {
    const result = await Follow.get(req.params);

    return (result === 'not found') ? res.status(404).send('Not Found') : res.status(200).send(result);
  } catch (err) {
    return res.status(500).send('Internal Server Error');
  }
};
