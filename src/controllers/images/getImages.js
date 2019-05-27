import { Images } from '../../models';

export default async (decodeData) => {
  const whereData = {};

  whereData.user_id = decodeData.id;
  whereData.removed = 0;

  const result = await Images.findOne({ where: whereData });

  const url = 'https://gaeddal.s3.ap-northeast-2.amazonaws.com/';

  const resultURL = url.concat(result.dataValues.key);

  return resultURL;
};
