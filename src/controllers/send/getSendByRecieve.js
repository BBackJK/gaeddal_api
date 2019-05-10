import { Send, Users } from '../../models';

export default async (data) => {

    Send.belongsTo(Users, {
        foreignKey : 'send_id',
        targetKey : 'id'
    });

    const result = await Send.findAll({
        attributes : ['id','send_id','recieve_id','contents','lat','lng','status','sended_at'],
        include : [{
            model : Users,
            attributes : ['id','email','name']
        }],
        where : { recieve_id : data.id , removed : 0 },
        order : [['sended_at','DESC']]
    })

    return result;
}
