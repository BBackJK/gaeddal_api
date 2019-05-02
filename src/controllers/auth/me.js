import { Users } from '../../models';

export default async (data) => {

    const whereData = {};

    whereData.removed = 0;
    whereData.id = data.id;
    whereData.email = data.email;
    whereData.nickname = data.nickname;

    const result = await Users.findOne({ where : whereData })

    if(!result) return 'not user';

    return result;
}
