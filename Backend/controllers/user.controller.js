const User = require('../models/users.model')
const bcrypt = require('bcrypt')
const createTokenAndCookie = require('../jwt/generateToken');


//sign controller logic

const sign = async (req, res) => {
  try {

    const { name, email, password } = req.body;



    const user = await User.findOne({ email })


    if (user) {
      return res.status(400).json({ message: 'Email already exists' });
    }


    const hashedpassword = await bcrypt.hash(password, 10)


    const newUser = await new User({
      name,
      email,
      password: hashedpassword,
    })


    newUser.save()
    if (newUser) {
      createTokenAndCookie(newUser._id, res)
      return res.status(201).json({
        message: 'User Registered sucessfully', user: {
          _id: newUser._id,
          name: newUser.name,
          email: newUser.email,
        }
      })
    }


  } catch (error) {
    console.log("this is Sign error : ", error)
    return res.status(500).json({ message: "Server Error" })
  }
}


//login controller logic


const login = async (req, res) => {
  try {

    const { email, password } = req.body;

    const valibate = await User.findOne({ email, })


    if (!valibate) {
      return res.status(404).json({Error:'user not found'})
    }

    const compare = await bcrypt.compare(password, valibate.password)

    if (!compare) {
      return res.status(404).json({Error:"password wrong"})
    }


    createTokenAndCookie(valibate._id, res)
    return res.status(201).json({
      message: 'User login', user: {
        _id: valibate._id,
        name: valibate.name,
        email: valibate.email,
      }
    })

  } catch (error) {
    console.log("this is login error : ", error)
    return res.status(500).json({ message: "Server Error" })
  }
}


//logout controller logic

const logout = async (req, res) => {
  try {
    res.clearCookie('jwt');
    return res.status(200).json({ message: "user logged out sucessfully" })

  } catch (error) {
    console.log("this is logout error : ", error)
    return res.status(500).json({ message: "Server Error" })
  }
}
module.exports = { sign, login, logout }