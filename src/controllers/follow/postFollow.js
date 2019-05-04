import { Users, Follow } from '../../models';
import follow from '../../models/follow';

export default async (data) => {

    const userFindData = {};

    userFindData.email = data.email;
    userFindData.removed = 0;

    const findData = await Users.findOne({ attributes : ['id'], where : userFindData });

    if(findData) {

        const followBody = {};

        followBody.follow_id = data.id;
        followBody.target_id = findData.dataValues.id;
        followBody.created_at = new Date();

        const result = await Follow.create(followBody);

        return result.dataValues;

    } else if(!findData) return 'not found';
}
