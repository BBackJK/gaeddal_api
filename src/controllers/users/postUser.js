import { Users } from '../../models';

export default async (data) => {

    console.log(data);

    const emailWhereData = {};

    emailWhereData.email = data.email;
    emailWhereData.removed = 0;

    const emailOverlap = await Users.findOne({where : emailWhereData});

    if(emailOverlap !== null) return 'email';

    data.created_at = new Date();

    console.log("in controller post User");

    const result = await Users.create(data);

    return result;
}
