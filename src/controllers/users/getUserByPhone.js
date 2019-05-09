import { Users } from '../../models';

export default async (data) => {

    const whereData = {};

    whereData.removed = 0;
    whereData.phone = data.phone;

    return await Users.findAll({ where : whereData });

}
