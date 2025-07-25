const User = require('../models/users.model')
const bcrypt = require('bcrypt')
const createTokenAndCookie = require('../jwt/generateToken');


//sign controller logic

const sign = async (req, res) => {
  try {

    const { name, email, password, confirmpassword } = req.body;

    if (password !== confirmpassword) {
      return res.send(400).json({ message: 'Password do not match' })
    }


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
      res.status(201).json({ message: 'User Registered sucessfully', newUser })
    }


  } catch (error) {
    console.log("this is Sign error : ", error)
    res.status(500).json({ message: "Server Error" })
  }
}


//login controller logic


const login = async (req, res) => {
  try {

    const { email, password } = req.body;

    const valibate = await User.findOne({ email, })


    if (!valibate) {
      return res.send('user not found')
    }

    const compare = await bcrypt.compare(password, valibate.password)

    if (!compare) {
      return res.send('password wrong')
    }


    createTokenAndCookie(valibate._id, res)
    res.status(201).json({
      message: 'User login', user: {
        _id: valibate._id,
        name: valibate.name,
        email: valibate.email,
      }
    })

  } catch (error) {
    console.log("this is login error : ", error)
    res.status(500).json({ message: "Server Error" })
  }
}


//logout controller logic

const logout = async (req, res) => {
  try {
    res.clearCookie('jwt');
    res.status(200).json({ message: "user logged out sucessfully" })

  } catch (error) {
    console.log("this is logout error : ", error)
    res.status(500).json({ message: "Server Error" })
  }
}
module.exports = { sign, login, logout }