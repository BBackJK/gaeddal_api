import { Users, Send } from '../../models';

export default async (decodeData, bodyData) => {
  const userFindData = {};

  userFindData.id = bodyData.id;
  userFindData.name = bodyData.name;
  userFindData.email = bodyData.email;
  userFindData.removed = 0;

  const findData = await Users.findOne({ where: userFindData });

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
