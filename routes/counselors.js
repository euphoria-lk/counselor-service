
var express = require('express');
var router = express.Router();
var Counselor=require('../models/Counselor');

/* GET counselor listing. */
router.get('/:name', async function(req, res, next) {
  try{
  const counselor= await Counselor.findOne({
      name:req.params.name
    });
    if(counselor){
      return res.status(201).json(counselor);
    }else{
      return res.status(200).send({
        message :"counselor not found"
      })
    }
  }catch(err){
    res.status(500).send({
      message:err.message
      })
  }
});

router.post('/signup', async function(req,res,next){
  try{
    const counselor= await Counselor.findOne({
      email:req.body.email
    });
    if(counselor){
      return res.status(200).send({
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
    return res.status(201).send({
      success:true,
      message:"new Counselor saved successfully"
    })
  }

  }catch(err){
    console.log("error"+err.message)
    res.status(500).send({message:err.message})

  }
  
});


module.exports = router;

