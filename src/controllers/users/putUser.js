import { Users } from '../../models';

export default async (data) => {

    const whereData = {};
    const updateData = {};

    updateData.updated_at = new Date();
    updateData.nickname = data.nickname;

    whereData.removed = 0;
    whereData.id = data.id;

    await Users.update(updateData, {where : whereData })

    whereData.nickname = data.nickname;

    const result = await Users.findOne({where : whereData});

    return result;
}
