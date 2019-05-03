import { Follow } from '../../controllers';
import { Util } from '../../util';

export default async (req, res) => {
    try {
        
        if(!req.body.id || !req.body.email) {
            return res.status(400).send(Util.succressFail(400,'Bad Data'));
        }
        
        const result = await Follow.post(req.body);

        if(!result || result === 'not found') {
            return res.status(404).send(Util.successFail(404,'Not Found'));
        };

        return res.status(202).send(Util.successTrue(result));

    } catch (err) {
        return res.status(500).send(Util.successFail(500,'internal server error'));
    }
}
