import { Users } from '../../controllers';
import { Util } from '../../util';

export default async (req, res) => {
    try {

        const data = req.params.id;

        const result = await Users.getById(data);

        if(!result || result.length === 0) {
            return res.status(404).send(Util.successFail(404,'not found'));
        }

        return res.status(200).send(Util.successTrue(result));

    }catch(error) {
        return res.status(500).send(Util.successFail(500,'internal server error'));
    }
};
