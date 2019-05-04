import { Follow } from '../../controllers';

export default async (req, res) => {

    try {

        if(!req.body.id || !req.body.email || !req.body.name) {
            return res.status(400).send('Bad data');
        }

        const result = await Follow.put(req.body);

        if(result || result === 204) return res.status(200).send(result);
        else if(result === 404) return res.status(404).send('Not Found');

    } catch (err) {
        return res.status(500).send('internal server error');
    }
}
