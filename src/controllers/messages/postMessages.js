import { Messages } from '../../models';

export default async (data) => {
    
    const insertData = {};

    insertData.user_id = data.id;
    insertData.category = data.category;
    insertData.contents = data.contents;
    insertData.created_at = new Date();
    
    const result = await Messages.create(insertData);

    return result;
}
