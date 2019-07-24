import { Send } from '../../models';

export default async (decodeData, paramData) => {
  const whereData = {};

  whereData.removed = 0;
  whereData.id = paramData.id;
  whereData.receive_id = decodeData.id;

  const findResult = await Send.findOne({ where: whereData });

  if (!findResult) return 'Empty';

  const updateData = {};

  updateData.removed = 1;
  updateData.removed_at = new Date();

  await Send.update(updateData, { where: whereData });

  whereData.removed = 1;

  const result = await Send.findOne({ where: whereData });

  return result;
};
