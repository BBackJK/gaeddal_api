import { Users } from '../../controllers';

export default async (req, res) => {
    try {

        const result = await Users.get();

        if(!result || result.length === 0) {
            return res.status(404).send('not found');
        }

        return res.status(200).send(result);

    } catch (err) {
        return res.status(500).send('internal server error');
    }
};
