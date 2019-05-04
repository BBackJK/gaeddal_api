import { Users } from '../../controllers';

export default async (req, res) => {
    try {

        if(!req.body.id || !req.body.name) {
            return res.status(400).send('bad data');
        }

        const result = await Users.put(req.body);

        if(!result || !result.length === 0) return res.status(404).send('not found');

        return res.status(200).send(result);

    } catch (err) {
        return res.status(500).send('internal server error');
    }
}
