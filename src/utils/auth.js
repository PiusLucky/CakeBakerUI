const UserModel = require("../models/User");
const { validateEmail, strengthChecker, lengthValidator } = require("./logic");
const bcrypt = require("bcryptjs");
const handlebars = require("handlebars");
const fs = require("fs");
const { promisify } = require("util");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const Cookies = require("js-cookie");


dotenv.config();


const saveUser = () => {
  const FRONTEND_LINK = process.env.FRONTEND_LINK;
  const USER = process.env.GMAIL_APP_USER;
  const PASS = process.env.GMAIL_APP_PASSWORD;
  const HOST = process.env.GMAIL_HOST;
  const PORT = process.env.GMAIL_PORT;

  return async (req, res) => {
    const {
      username,
      email,
      password,
      repeatPassword,
      phoneNumber
    } = req.body;

    let user = req.user;

    const usernameLower = username.toLowerCase();
    const emailLower = email.toLowerCase();

    //mapping model to new instance
    user.username = usernameLower;
    user.email = emailLower;
    user.password = password;
    user.repeatPassword = repeatPassword;
    user.phoneNumber = phoneNumber;

    //generate new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //check if username already exists
    const usernameExist = await UserModel.findOne({
      username: usernameLower,
    });

    if (usernameExist) {
      return res.status(400).json({
        msg: "Username already exists",
        _help:
          "Try a different username combination by appending a digit or symbol to previous username",
      });
    }

    //validate username length
    const realUsername = lengthValidator(username, 20, 6);
    if (!realUsername)
      return res.status(400).json({
        msg: "Username is not valid!",
        _help:
          "Username must have a minimum of 6 and maximium of 20 characters.",
      });


    //check if email passes the validation check
    const realEmail = validateEmail(emailLower);

    //check if email already exists
    const emailExist = await UserModel.findOne({
      email: emailLower,
    });

    if (emailExist) {
      return res.status(400).json({
        msg: "Email already exists",
        _help:
          "Try a different email by appending a digit or symbol to previous email",
      });
    }

    if (!realEmail) {
      return res.status(400).json({
        msg: "Email not in correct format",
        _help: "Use email like john_doe@gmail.com",
      });
    }

    //check if password and repeatPassword is same
    if (password !== repeatPassword)
      return res.status(400).json({
        msg: "Passwords do not match!",
        _help:
          "The password should be the same for Password and confirmPassword fields.",
      });

    //validate phone number length
    const realPhone = lengthValidator(phoneNumber, 18, 5);
    if (!realPhone)
      return res.status(400).json({
        msg: "Phone number not valid!",
        _help:
          "Phone number must have a minimum of 5 and maximium of 18 characters.",
      });

    //check for password strength
    const { status } = strengthChecker(password);
    if (status === "strong" || status === "medium") {
      try {
        user.password = hashedPassword;
        user.repeatPassword = hashedPassword;

        const transporter = nodemailer.createTransport({
          host: HOST,
          port: PORT,
          auth: {
            user: USER,
            pass: PASS,
          },
          secure: true,
          // This will prevent "nodejs - error self signed certificate in certificate chain" in development.
          tls: {
            rejectUnauthorized: false,
          },
        });

        crypto.randomBytes(32, async (err, buffer) => {
          if (err) {
            return res.json(err);
          }
          const isVerified = true;
          const token = buffer.toString("hex");
          user.verifyToken = token;
          /** 
            Use this link => https://www.online-toolz.com/tools/date-functions.php
            Reset Token will expire in the next 30 minutes.
          */
          user.vExpireToken = Date.now() + 1800000;

          user = await user.save();

          if (user) {
            const mail = await sendMail(isVerified, user, transporter);
            if (mail.status === 200) {
              res.status(201).json({
                status: 201,
                msg: `Successful, redirecting to Dashboard...`,
              });
            }
          }
        });
      } catch (err) {
        res.status(400).json({
          msg: "OOPS...",
          _help: "Try different inputs",
        });
      }
    } else {
      return res.status(400).json({
        msg: "Password is very weak",
        _help: "Try something similar to MyPassword$1234",
      });
    }
  };
};


const sendMail = async (isVerify, user, mailSender) => {
  try {
    const FRONTEND_LINK = process.env.FRONTEND_LINK;
    const readFile = promisify(fs.readFile);

    let html = await readFile("src/template/html/email.html", "utf8");

    let template = handlebars.compile(html);

    const savedUser = await user.save();

    const token = isVerify ? savedUser.verifyToken : savedUser.resetToken;
    const email = savedUser.email

    const urlPart = isVerify ? "email-verify" : "password-reset";

    let data = {
      username: savedUser.username,
      full_link: `${FRONTEND_LINK}/${urlPart}?email=${email}&token=${token}`,
      frontend_link: FRONTEND_LINK,
      emailType: !isVerify ? "Reset Password" : "Verify Email",
      headerType: !isVerify ? "PASSWORD RESET" : "VERIFICATION",
      action: !isVerify ? "Password Reset" : "Account Verification",
      tokenExpiration: isVerify ? "30 minutes " : "1 hour ",
    };
    let htmlToSend = template(data);
    const mailOptions = {
      from: !isVerify?"Cake Baker <refem.applicants@gmail.com>":"Cake Baker <refem.applicants@gmail.com>",
      to: savedUser.email,
      subject: !isVerify ? "Password Reset Request" : "Verify Email",
      html: htmlToSend,
    };
    mailSender.sendMail(mailOptions);
    return {
      status: 200,
      msg:
        "Email Sent succesfully, check your mail inbox (or spam folder).",
      sent: true,
    };
  } catch (err) {
    return {
      status: 400,
      msg: "Something went wrong. Try again.",
      sent: false,
      err: err,
    };
  }
};


const setHttpOnlyCookie = async(access, res) => {
  const ENVIRONMENT = process.env.NODE_ENV;
  const prod = ENVIRONMENT !== "development"
  const options = {
    httpOnly: true,
    setPath: "/",
//     expires: new Date(Date.now() + 10800000),
    maxAge: 3 * 60 * 60 * 1000,
    secure: prod,
    ...(prod && {
    sameSite: "None",
    }),
//         httpOnly: true,
//         domain: "cake-baker-api-zze59.ondigitalocean.app",
//         sameSite: "lax",
//         path: "/",
//         maxAge: 3 * 60 * 60 * 1000,
//         secure: true
  };
  // res.header('Access-Control-Allow-Credentials', 'true');
  
  res.cookie("authToken", access.token, options);
};

const createCookieCumStatus = async (access, statusCode, res) => {
  await setHttpOnlyCookie(access, res)
  res.status(200).json({
    msg: "Success, Redirecting now..."
  });
};

module.exports = {
  saveUser,
  sendMail,
  createCookieCumStatus,
  setHttpOnlyCookie
};
