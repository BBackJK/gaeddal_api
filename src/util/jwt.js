import jwt from 'jsonwebtoken';

const util = {};

util.isLoggedIn = (req, res, next) => {
    const token = req.headers['x-access-token'] || req.query.token

    if(!token) {
        return res.status(400).send('token is required');
    }
    else {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if(err) return res.status(401).send("Invalid Token");
            else {
                req.decoded = decoded;
                next();
            }
        });
    }
};

export default util;
