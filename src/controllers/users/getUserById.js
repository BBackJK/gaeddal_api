import { Users } from '../../models';

export default async (data) => {

    const whereData = {}; 

    whereData.removed = 0;
    whereData.id = data;

    return await Users.findOne({ where : whereData });

}
