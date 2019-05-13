import jwt from 'jsonwebtoken';

const util = {};

util.isLoggedIn = (req, res, next) => {
  console.log('in jwt is logged in');

  const token = req.headers['x-access-token'] || req.query.token;

  if (!token) {
    return res.status(400).send('token is required');
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).send('Invalid Token');

    req.decoded = decoded;
    return req.decoded;
  });

  return next();
};

export default util;
