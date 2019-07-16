import aws from 'aws-sdk';
import multer from 'multer';
import multerS3 from 'multer-s3';
import uuid from 'uuid';

const { cloud } = require('../../config').default;

aws.config.update({
  secretAccessKey: cloud.secretAccessKey,
  accessKeyId: cloud.accessKeyId,
  region: cloud.region,
});

const s3 = new aws.S3();

const upload = multer({
  storage: multerS3({
    s3,
    bucket: cloud.bucket,
    metadata: (req, file, cb) => {
      cb(null, { filename: file.fieldname });
    },
    key: (req, file, cb) => {
      cb(null, `${uuid.v4()}.${req.decoded.email}`);
    },
  }),
});

export default upload;
