import { Users, Send } from '../../models';

export default async (data) => {

    const userFindData = {};

    userFindData.name = data.name;
    userFindData.email = data.email;
    userFindData.removed = 0;

    const findData = await Users.findOne({ attributes : ['id'], where : userFindData });

    if(findData) {

        const sendBody = {};

        sendBody.send_id = data.id;
        sendBody.recieve_id = findData.dataValues.id;
        sendBody.contents = data.contents;
        sendBody.lat = data.lat;
        sendBody.lng = data.lng;
        sendBody.sended_at = new Date();

        const result = await Send.create(sendBody);

        return result;

    } else if(!findData) return 'not found';
}
