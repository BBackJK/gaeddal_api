import { Users } from '../../models';

export default async (data) => {

    const emailWhereData = {};
    const nickWhereData = {};

    emailWhereData.email = data.email;
    emailWhereData.removed = 0;

    nickWhereData.nickname = data.nickname;
    nickWhereData.removed = 0;

    const emailOverlap = await Users.findOne({where : emailWhereData});
    const nickOverlap = await Users.findOne({where : nickWhereData});

    if(emailOverlap !== null) return 'email';
    if(nickOverlap !== null) return 'nickname!';

    const result = await Users.create(data);
    return result;
}
