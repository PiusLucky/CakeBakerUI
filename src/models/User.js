const mongoose = require("mongoose");
const Role = require("../utils/role");
const generator = require("../utils/generator");


const UserSchema = new mongoose.Schema(
  {
    //preliminaries
    username: {
      type: String,
      required: true,
      minlength: [2, "Must be at least two(2) characters"],
      maxlength: [20, "Must be at most twenty(20) characters"],
      unique: [true, "Username already exists"],
    },
    profile_url: String,
    //contacts
    phoneNumber: {
      type: String,
      minlength: 5,
      maxlength: 18,
      required: true,
    },
    email: {
      type: String,
      maxlength: [40, "Must be at most forty(40) characters"],
      unique: true,
      required: true
    },
    //security
    password: {
      type: String,
      minlength: [6, "Must be at least six(6) characters"],
      maxlength: [150, "Must be at most 150 characters"],
      required: true,
    },
    repeatPassword: {
      type: String,
      minlength: [6, "Must be at least six(6) characters"],
      maxlength: [150, "Must be at most 150 characters"],
      required: true,
    },

    //role
    role: {
     type: String,
     required: true,
     enum: [Role.User, Role.Admin],
     default: Role.User,
    },

    //token
    resetToken: String,
    expireToken: Date,

    //active_status
    isVerified: {
      type: Boolean,
      default: false,
      required: true
    },
    
    //token of active_status
    verifyToken: String,
    vExpireToken: Date,

    //api_key
    apiKey: String
  },
  { timestamps: true }
);



UserSchema.pre("save", function(next) {
  let user = this;
  let mail = user.email;
  if (!user.apiKey) user.apiKey = generator.generateApiKey();
  if(!user.profile_url && mail) user.profile_url = generator.avatarGenerator(mail);
  next();
});



module.exports = mongoose.model("user", UserSchema, "User Collection");
