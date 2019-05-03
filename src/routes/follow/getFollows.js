import { Follow } from '../../controllers';
import { Util } from '../../util';

export default async (req, res) => {
    try {

        const result = await Follow.getAll(req.params);

        if(!result) return res.status(404).send(Util.successFail(404,'Not Found'));

        return res.status(200).send(Util.successTrue(result));

    } catch (err) {
        return res.status(500).send(Util.successFail(500,'internal server error'));
    }
}
