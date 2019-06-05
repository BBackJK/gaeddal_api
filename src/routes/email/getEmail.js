import nodeMailer from 'nodemailer';

import { Email } from '../../controllers';
import { authNumber } from '../../util';

export default async (req, res) => {
  try {
    if (!req.decoded) return res.status(400).send('Bad Data');

    const result = await Email.get(req.decoded);

    if (!result) return res.status(404).send('Not Found');

    const random = Math.floor(Math.random() * 90000) + 10000;

    authNumber.setNumber(random);

    const transporter = nodeMailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: req.decoded.email,
      subject: '안녕하세요! 개딸입니다. 이메일 인증을 해주세요.',
      // eslint-disable-next-line prefer-template
      html: '<p>앱에서 인증번호를 입력하세요!<br>' + random + '</p>',
    };

    const emailResult = transporter.sendMail(mailOptions, (err) => {
      if (err) return 1;
      return 2;
    });

    return emailResult === 1
      ? res.status(500).send('Internal Server Email Send Error')
      : res.status(200).send('OK');
  } catch (err) {
    return res.status(500).send('Internal Server Error');
  }
};
