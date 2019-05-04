import { Auth } from '../../controllers';

export default async (req, res) => {
    try {

        if(!req.decoded) return res.status(400).send('not found');

        const result = await Auth.me(req.decoded);

        if(!result || result === 'not user') return res.status(404).send('Not User');

        return res.status(200).send(result);

    } catch (err) {
        return res.status(500).send('internal server error');
    }
}
