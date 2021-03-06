const UserModel = require("../models/User");
const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  // const token = req.header("auth-token"); // headers only
  const token = req.cookies.authToken; // httpOnly cookie

  // apiKey referenced as userId for better sync with req.params
  const apiKey = req.header("api-key"); // headers only

  if (!token && !apiKey) {
    return res.status(401).json({
      msg: "Login Cookie expired, kindly log in again. Thanks",
      _help:
        "Please include either the token access or the apiKey in the header of your request",
    });
  }


  if (apiKey) {
    const user = await UserModel.findOne({ apiKey })
      .select([
        "-__v",
        "-password",
        "-repeatPassword",
        "-resetToken",
        "-expireToken",
        "-verifyToken",
        "-vExpireToken",
      ])

      req.user = user;
      return next();
  }

  if (token) {
    try {
      const verified = jwt.verify(token, process.env.JWT_SECRET);
      const user = await UserModel.findOne({ _id: verified.id })
        .select([
          "-__v",
          "-password",
          "-repeatPassword",
          "-resetToken",
          "-expireToken",
          "-verifyToken",
          "-vExpireToken",
        ])

        req.user = user;
        return next();
    } catch (err) {
      return res.status(400).json({
        msg: "Invalid Token",
        _help: "Token must have expired, try logging in again.",
      });
    }
  }

  return res.status(401).json({
    msg: "Token or API Key is not valid!",
    _help: "Try providing a secure Token or an API Key to send mail",
  });
};

module.exports = authMiddleware;
