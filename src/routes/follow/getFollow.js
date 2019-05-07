import { Follow } from '../../controllers';

export default async (req, res) => {
    try {

        const result = await Follow.get(req.params);

        if(result.length >= 0) {
            return res.status(200).send(result);
        } else if (result === 'not found') {
            return res.status(404).send('Not Found');
        };

    } catch (err) {
        return res.status(500).send('Internal Server Error');
    }
}
