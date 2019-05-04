import { Auth } from '../../controllers';

export default async (req, res) => {
    try {

        if(!req.body.sns_email) return res.status(400).send('bad data');

        const result = await Auth.login(req.body.sns_email);

        if(result === 'email') return res.status(404).send('not found');

        return res.status(201).send(result);

    } catch (err) {
        return res.status(500).send('internal server error');
    }
}
