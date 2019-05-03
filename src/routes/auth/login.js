import { Auth } from '../../controllers';
import { Util } from '../../util';

export default async (req, res) => {
    try {

        if(!req.body.sns_email) return res.status(400).send(Util.successFail(400,'bad data'));

        const result = await Auth.login(req.body.sns_email);

        if(result === 'email') return res.status(404,'not found');

        return res.status(201).send(Util.successTrue(result));

    } catch (err) {
        return res.status(500).send(Util.successFail(500,'internal server error'));
    }
}
