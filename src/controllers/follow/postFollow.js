import { Users, Follow } from '../../models';

export default async (data) => {

    const userFindData = {};

    userFindData.email = data.email;
    userFindData.removed = 0;

    const findData = await Users.findOne({ attributes : ['id'], where : userFindData });

    if(findData) {

        const followBody = {};

        followBody.follow_id = data.id;
        followBody.target_id = findData.dataValues.id;

        const result = await Follow.create(followBody);

        return result.dataValues;

    } else if(!findData) return 'not found';
}
