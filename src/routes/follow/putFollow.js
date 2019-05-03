import { Follow } from '../../controllers';
import { Util } from '../../util';

export default async (req, res) => {

    try {

        if(!req.body.id || !req.body.email || !req.body.name) {
            return res.status(400).send(Util.successFail(400,'Bad data'));
        }

        const result = await Follow.put(req.body);

        if(result || result === 204) return res.status(200).send(Util.successTrue(result));
        else if(result === 404) return res.status(404).send(Util.successFail(404,'Not Found'));

    } catch (err) {
        return res.status(500).send(Util.successFail(500,'internal server error'));
    }
}
