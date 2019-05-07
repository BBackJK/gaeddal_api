import { Auth } from '../../controllers';

export default async (req, res) => {
    try {

        if(!req.body.sns_email) return res.status(400).send('Bad Data');

        const result = await Auth.login(req.body.sns_email);

        if(result === 'email') return res.status(404).send('Not Found');

        return res.status(201).send(result);

    } catch (err) {
        return res.status(500).send('Internal Server Error');
    }
}
