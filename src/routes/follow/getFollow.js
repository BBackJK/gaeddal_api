import { Follow } from '../../controllers';

export default async (req, res) => {
    try {

        const result = await Follow.get(req.params);

        if(result.length > 0 || result === 204) {
            return res.status(200).send(result);
        } else if (result.length === 0 || result === 404) {
            return res.status(404).send('Not Found');
        };

    } catch (err) {
        return res.status(500).send('internal server error');
    }
}
