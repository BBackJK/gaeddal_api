import { Users } from '../../controllers';

export default async (req, res) => {
    try {

        const result = await Users.getByName(req.params);
        
        if(!result) return res.status(404).send('Not Found');

        if(result.length >= 0) return res.status(200).send(result);

    } catch (err) {
        return res.status(500).send('Internal Server Error');
    }
}
