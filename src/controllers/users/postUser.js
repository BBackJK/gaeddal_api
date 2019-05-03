import { Users } from '../../models';

export default async (data) => {

    const emailWhereData = {};

    emailWhereData.email = data.email;
    emailWhereData.removed = 0;

    const emailOverlap = await Users.findOne({where : emailWhereData});

    if(emailOverlap !== null) return 'email';

    const result = await Users.create(data);

    return result.dataValues;
}
