import { Send } from '../../models';

export default async (decodeData, bodyData) => {
  const whereData = {};
  const updateData = {};

  whereData.id = bodyData.id;
  whereData.receive_id = decodeData.id;
  whereData.removed = 0;
  whereData.readed = 0;

  const findResult = await Send.findOne({ where: whereData });

  if (!findResult) return 'Empty';

  updateData.readed = 1;
  updateData.readed_at = new Date();

  await Send.update(updateData, { where: whereData });

  whereData.readed = 1;

  const result = await Send.findOne({ where: whereData });

  return result;
};
