import { Send, Users } from '../../models';
import db from '../../db/db';

export default async (data) => {

    const Op = db.Sequelize.Op;

    const result = await Send.findAll({
        include : [{
            model : Users,
            attributes : ['id','email','name']
        }],
        where : { send_id : data.id },
        order : [['sended_at','DESC']]
    })

    return result;
}
