// const jwt = require('jsonwebtoken');

// const verifyToken = (req, res, next) => {
//     let token;
//     if (req?.headers?.authorization?.startsWith('Bearer')) {
//         token = req?.header?.authorization?.split(" ")[1];
//         if (token) {
//             const decode = jwt.verify(token, process.env.SECRET_KEY);
//             console.log(decode);

//         }
//         else {
//             throw next(createError(400, "you are not authenticated"));
//         }
//     }
// };
// module.exports = { verifyToken };

const jwt = require('jsonwebtoken');
const createError = require('./createError');
const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;

    if (!token) return next(createError(401, "you are not authenticated"));

    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
        if (err) return next(createError(401, "token not valid"));
        req.user = user;
        next();

    });

};

module.exports = verifyToken;