import { Messages } from '../../models';

export default async (decodeData, paramData) => {
  const whereData = {};

  whereData.removed = 0;
  whereData.user_id = decodeData.id;
  whereData.id = paramData.id;

  const result = await Messages.findOne({ where: whereData });

  return result;
};
