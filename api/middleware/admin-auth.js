const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try{
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, 'admin!23');
    req.userData = decodedToken;
    next();
  } catch(error) {
    console.log('in error'+ error);
    return res.status(401).json({
      message: 'Auth failed'
    });
  }

};
