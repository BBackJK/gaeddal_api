import { Auth } from '../../controllers';
import { Util } from '../../util';

export default async (req, res) => {
    try {

        if(!req.decoded) return res.status(400).send(Util.successFail(400,'not found'));

        const result = await Auth.me(req.decoded);

        if(!result || result === 'not user') return res.status(404).send(Util.successFail(404,'Not User'));

        return res.status(200).send(Util.successTrue(result));

    } catch (error) {
        return res.status(500).send(Util.successFail(500,'internal server error'));
    }
}
