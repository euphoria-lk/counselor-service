var mongoose  = require('mongoose');
var mongoose= require('mongoose');
const dbconfig = require('../config/DBConfig');

const connectDb = () => {
  return mongoose.connect(dbconfig.url).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
})
};
 
const CounselorSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password:{
        type:String,
        required: true
    },
    name:{
        type:String,
        required: true
    },
    description:{
       type:String,
        required: true
    },
    slmc:{
        type:String,
        required: true
    },
    speciality:{
        type:String,
        required: true
    },
    hospital:{
        type:String,
        required: true
    },
    city:{
        type:String,
        required: true
    },
    image:{
        type:String,
        required: true
    }    
  },
  { timestamps: true },
);
 
const counselor = mongoose.model('Counselor', CounselorSchema);
 
module.exports=counselor