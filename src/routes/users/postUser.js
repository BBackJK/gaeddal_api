import { Users } from '../../controllers';
import { Util } from '../../util';

export default async (req, res) => {
    try {

        if(!req.body.email || !req.body.sns_email || !req.body.name) {
            return res.status(400).send(Util.successFail(400,'Bad Data'));
        }

        const result = await Users.post(req.body);

        if(result === undefined && result === 'email'){
            return res.status(200).send(Util.successFail(200,'already exist email'));
        }

        return res.status(201).send(Util.successTrue(result));

    } catch (err) {
        return res.status(500).send(Util.successFail(500,'internal server error'));
    }
};
