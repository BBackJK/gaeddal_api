import { Alarm } from '../../controllers';

export default async (req, res) => {
  try {
    if (!req.decoded || !req.body.title || !req.body.date || !req.body.time) {
      return res.status(400).send('Bad Data');
    }

    const result = await Alarm.post(req.decoded, req.body);

    return result === 'Empty'
      ? res.status(404).send('Not Found')
      : res.status(201).send(result);
  } catch (err) {
    return res.status(500).send('Internal Server Error');
  }
};
