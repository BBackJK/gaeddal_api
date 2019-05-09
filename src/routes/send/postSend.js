import { Send } from '../../controllers';

export default async (req, res) => {
    try {

        if(!req.body.id || !req.body.name || !req.body.email || !req.body.contents || !req.body.lat || !req.body.lng) {
            return res.status(400).send('Bad Data');
        }

        const result = await Send.post(req.body);

        return !result ? res.status(404).send('Not Found') : res.status(201).send(result);

    } catch (err) {
        return res.status(500).send('Internal Server Error');
    }
}
