import jwt from 'jsonwebtoken';

const util = {};

util.successTrue = (data) => {
    return {
        success : true,
        message : null,
        errors : null,
        data : data ? data : null
    };
};

util.successFail = (err, msg) => {
    if(!err && !msg) {
        msg = 'data not found';
    }

    return {
        success : false,
        message : msg,
        error : err ? err : null,
        data : null
    };
};

util.isLoggedIn = (req, res, next) => {
    const token = req.headers['x-access-token'] || req.query.token

    if(!token) {
        return res.json(util.successFail(null, 'token is required'));
    }
    else {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if(err) return res.json(util.successFail(err));
            else {
                req.decoded = decoded;
                next();
            }
        });
    }
};

export default util;
