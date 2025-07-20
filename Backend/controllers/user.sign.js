 const User = require('../models/users.model')

  const sign = async(req,res)=>{
      try {

        const {name,email,password,confirmpassword}= req.body;

        if(password !== confirmpassword){
           return res.send(400).json({message:'Password do not match'})
        }

      
        const user = await User.findOne({email})


        if(user){
            return res.status(400).json({message:'Email already exists'});
        }

        const newUser = await new User({
            name,
            email,
            password,
        })

        
        newUser.save().then(()=>{
            res.status(201).json({message:'User Registered sucessfully'})
        })


      } catch (error) {
        console.log("this is error :",error)
      }
}


module.exports = sign
