const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 6,
    max: 15,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    required: false,
  },
  main_parent: {
    type: String,
    required: false,
  },
  parent_username: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  pan_number: {
    type: String,
    required: false,
    min: 10,
    max: 12,
  },
  pan_image: {
    type: String,
    required: false,
  },
  adhar_num: {
    type: String,
    required: false,
  },
  adhar_image: {
    type: String,
    required: false,
  },
  bank_name: {
    type: String,
    required: false,
  },
  account_no: {
    type: Number,
    required: false,
  },
  ifsc_code: {
    type: String,
    required: false,
  },
  kyc_verified: {
    type: Number,
    required: false,
  },
  bank_verified: {
    type: Number,
    required: false,
  },

  todos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Todo" }],
});

UserSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();
  bcrypt.hash(this.password, 10, (err, passwordHash) => {
    if (err) return next(err);
    this.password = passwordHash;
    next();
  });
});

UserSchema.methods.comparePassword = function (password, cb) {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    if (err) return cb(err);
    else {
      if (!isMatch) return cb(null, isMatch);
      return cb(null, this);
    }
  });
};

module.exports = mongoose.model("User", UserSchema);


















// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

// const UserSchema = new mongoose.Schema({
//     username :{
//         type : String,
//         required : true,
//         min : 6,
//         max : 15
//     },
//     password : {
//         type : String,
//         required : true
//     },
//     role : {
//         type : String,
//         enum : ['user','admin'],
//         required: true
//     },
//     todos : [{type : mongoose.Schema.Types.ObjectId, ref: 'Todo'}]
// });

// UserSchema.pre('save',function(next){
//     if(!this.isModified('password'))
//         return next();
//     bcrypt.hash(this.password,10,(err,passwordHash)=>{
//         if(err)
//             return next(err);
//         this.password = passwordHash;
//         next();
//     });
// });

// UserSchema.methods.comparePassword = function(password,cb){
//     bcrypt.compare(password,this.password,(err,isMatch)=>{
//         if(err)
//             return cb(err);
//         else{
//             if(!isMatch)
//                 return cb(null,isMatch);
//             return cb(null,this);
//         }
//     });
// }

// module.exports = mongoose.model('User',UserSchema);