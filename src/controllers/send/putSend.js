import { Send } from '../../models';

export default async (decodeData, bodyData) => {
  const whereData = {};
  const updateData = {};

  whereData.id = bodyData.id;
  whereData.recieve_id = decodeData.id;
  whereData.removed = 0;
  whereData.readed = 0;

  updateData.readed = 1;
  updateData.readed_at = new Date();

  const findResult = await Send.findOne({ where: whereData });

  if (!findResult) return 'Empty';

  await Send.update(updateData, { where: whereData });

  whereData.readed = 1;

  const result = Send.findOne({ where: whereData });

  return result;
};
