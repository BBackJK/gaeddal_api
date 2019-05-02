import jwt from 'jsonwebtoken';

import { Users } from '../../models';

export default async (data) => {

    const whereData = {};

    whereData.removed = 0;
    whereData.sns_email = data;

    const result = await Users.findOne({ where : whereData })

    if(!result) return 'email';

    const payload = { 
        id : result.dataValues.id,
        email : result.dataValues.email,
        nickname : result.dataValues.nickname
    }

    const secretOrPrivateKey = process.env.JWT_SECRET;
    
    const options = { expiresIn : 60*60*24 };

    const token = jwt.sign(payload, secretOrPrivateKey, options);

    return token;
};
