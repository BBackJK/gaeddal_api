import { Users } from '../../controllers';
import { Util } from '../../util';

export default async (req, res) => {
    try {

        if(!req.body.id || !req.body.nickname) {
            return res.status(400).send(Util.successFail(400,'bad data'));
        }

        const result = await Users.put(req.body);

        if(!result || !result.length === 0) return res.status(404).send(Util.successFail(404,'not found'));

        return res.status(200).send(Util.successTrue(result));

    }catch (error) {
        return res.status(500).send(Util.successFail(500,'internal server error'));
    }
}
