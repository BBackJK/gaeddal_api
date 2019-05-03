import { Follow } from '../../controllers';
import { Util } from '../../util';

export default async (req, res) => {
    try {

        const result = await Follow.get(req.params);

        if(result.length > 0 || result === 204) {
            return res.status(200).send(Util.successTrue(result));
        } else if (result.length === 0 || result === 404) {
            return res.status(404).send(Util.successFail(404, 'Not Found'));
        };

    } catch (err) {
        return res.status(500).send(Util.successFail(500,'internal server error'));
    }
}
