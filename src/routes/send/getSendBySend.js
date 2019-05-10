import { Send } from '../../controllers';

export default async (req, res) => {
  try {
    const result = await Send.getBySend(req.params);

    return !result ? res.status(404).send('Not Found') : res.status(200).send(result);
  } catch (err) {
    return res.status(500).send('Internal Server Error');
  }
};
