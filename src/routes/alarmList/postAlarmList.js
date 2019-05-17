import { AlarmList } from '../../controllers';

export default async (req, res) => {
  try {
    if (!req.body.title || !req.decoded) {
      return res.status(400).send('Bad Data');
    }

    const result = await AlarmList.post(req.decoded, req.body);

    return res.status(201).send(result);
  } catch (err) {
    return res.status(500).send('Internal Server Error');
  }
};
