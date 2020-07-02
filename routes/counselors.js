
var express = require('express');
var router = express.Router();
var Counselor=require('../models/Counselor');

/* GET counselors listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', async function(req,res,next){
  try{
    const counselor= await Counselor.findOne({
      email:req.body.email
    });
    if(counselor){
      res.status(200).send({
      success: 'true',
      message: "Counselor already exists"
      })
    }else{
      const newCounselor= new Counselor({
          email: req.body.email,
          password:req.body.password,
          name:req.body.name,
          description:req.body.description,
          slmc:req.body.slmc,
          hospital:req.body.hospital,
          speciality:req.body.speciality,
          city:req.body.city,
          image:req.body.image 
      })
    const savedCounselor= await newCounselor.save();
    res.status(201).send({
      success:true,
      message:"new Counselor saved successfully"
    })
  }

  }catch(err){
    res.status(500).send({message:err.message})

  }
  
});


module.exports = router;

