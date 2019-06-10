import { Users, Send } from '../../models';

export default async (decodeData, bodyData) => {
  const whereData = {};

  whereData.id = bodyData.id;
  whereData.name = bodyData.name;
  whereData.email = bodyData.email;
  whereData.removed = 0;

  const findData = await Users.findOne({ where: whereData });

  if (!findData) return 'Empty';

  const postData = {};

  postData.send_id = decodeData.id;
  postData.recieve_id = bodyData.id;
  postData.contents = bodyData.contents;
  postData.lat = bodyData.lat;
  postData.lng = bodyData.lng;
  postData.sended_at = new Date();

  const result = await Send.create(postData);

  return result;
};
