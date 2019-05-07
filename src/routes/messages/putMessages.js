import { Messages } from '../../controllers';

export default async (req, res) => {
    try {

        if(!req.body.id || !req.body.user_id ||!req.body.category || !req.body.contents) {
            return res.status(400).send('Bad Data');
        };

        const result = await Messages.put(req.body);

        return !result ? res.status(404).send('Not Found') : res.status(200).send(result);

    } catch (err) {
        return res.status(500).send('Internal Server Error');
    }
}
