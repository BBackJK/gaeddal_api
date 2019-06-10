import { AlarmList } from '../../controllers';

export default async (req, res) => {
  try {
    if (!req.decoded || !req.body.title || !req.body.id) {
      return res.status(400).send('Bad Data');
    }

    const result = await AlarmList.put(req.decoded, req.body);

    return result === 'Empty'
      ? res.status(404).send('Not Found')
      : res.status(200).send(result);
  } catch (err) {
    return res.status(500).send('Internal Server Error');
  }
};
