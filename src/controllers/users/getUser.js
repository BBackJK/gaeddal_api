import { Users } from '../../models';

export default async () => {

    const result =  await Users.findAll({ where : { removed : 0 }})

    return result;
}
