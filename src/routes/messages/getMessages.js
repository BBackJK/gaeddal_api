import { Messages } from '../../controllers';

export default async (req, res) => {
    try {

        const result = await Messages.get(req.params);

        if(!result || result.length === 0) {
            return res.status(404).send('Not Found');
        }

        return res.status(200).send(result);

    } catch (err) {
        return res.status(500).send('Internal Server Error');
    }
}
