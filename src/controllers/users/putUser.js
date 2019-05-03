import { Users } from '../../models';

export default async (data) => {

    const whereData = {};
    const updateData = {};

    updateData.updated_at = new Date();
    updateData.name = data.name;

    whereData.removed = 0;
    whereData.id = data.id;

    const updateResult = await Users.update(updateData, {where : whereData })

    whereData.name = data.name;

    const result = await Users.findOne({where : whereData});

    return result;
}
