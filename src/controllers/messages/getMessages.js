import { Messages } from '../../models';

export default async (data) => {

    const whereData = {};

    whereData.removed = 0;
    whereData.user_id = data.id;

    const result = await Messages.findAll({ where : whereData });

    return result;
}
