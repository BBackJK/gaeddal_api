import jwt from 'jsonwebtoken';

const { auth } = require('../../config').default;

const util = {};

util.isLoggedIn = (req, res, next) => {
  const token = req.headers['x-access-token'] || req.query.token;

  if (!token) {
    return res.status(400).send('token is required');
  }

  jwt.verify(token, auth.secret, (err, decoded) => {
    if (err) return res.status(401).send('Invalid Token');

    req.decoded = decoded;
    return req.decoded;
  });

  return next();
};

export default util;
