import { Users } from '../../models';

export default async (data) => {

    const whereData = {};

    whereData.removed = 0;
    whereData.name = data.name;

    return await Users.findAll({ where : whereData });

}
