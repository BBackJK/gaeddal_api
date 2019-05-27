import aws from 'aws-sdk';
import multer from 'multer';
import multerS3 from 'multer-s3';
import uuid from 'uuid';

aws.config.update({
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  region: process.env.AWS_REGION,
});

const s3 = new aws.S3();

const upload = multer({
  storage: multerS3({
    s3,
    bucket: process.env.AWS_BUCKET,
    metadata: (req, file, cb) => {
      cb(null, { filename: file.fieldname });
    },
    key: (req, file, cb) => {
      cb(null, `${uuid.v4()}.${req.decoded.email}`);
    },
  }),
});

export default upload;
