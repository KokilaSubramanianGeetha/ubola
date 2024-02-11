const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name:{
    type:String,
    default:''
  },
  mobile:{
    type:String,
    require:true
  },
  email:{
    type:String,
    default:'' 
  },
  password:{
    type:String,
    require:''
  },
  isMobileVerified:{
    type:String,
    default:''
  },
  isEmailVerified:{
    type:String,
    default:''
  },
  token:{
    type:String,
    default:''
  },
  dateCreate:{
    type:String,
    require:true
  }

});


module.exports = mongoose.model('User',userSchema);
