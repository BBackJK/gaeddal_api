import { Users, Follow } from '../../models';
import db from '../../db/db';

export default async (data) => {
    
    const Op = db.Sequelize.Op;

    const followFindData = {
        acceptanced : 1,
        removed : 0,
        [Op.or] : [{ follow_id : data.id }, { target_id : data.id}]
    };

    const findData = await Follow.findAll({ attributes : ['follow_id','target_id'], where : followFindData , order : [[ 'acceptanced_at', 'DESC']]});

    const insertArray = [];

    for (let i in findData) {
        if (findData[i].dataValues.follow_id == data.id) {
            insertArray.push(findData[i].dataValues.target_id);
        } else if (findData[i].dataValues.target_id == data.id){
            insertArray.push(findData[i].dataValues.follow_id);
        }
    };

    const whereData = {};

    whereData.id = insertArray;
    whereData.removed = 0;
    
    const result = await Users.findAll({ attributes : ['id','name','email'], where : whereData });

    return result;
}
