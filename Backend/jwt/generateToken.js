const { response } = require('express');
const jwt = require('jsonwebtoken');

//jwt token creation and response token as cookie

const createTokenAndCookie = (username, res) => {
    const token = jwt.sign({ username }, process.env.JWT_TOKEN, {
        expiresIn: "5d"
    })

    res.cookie('jwt', token, {
        httpOnly: true, //xss attacks
        secure: true,
        sameSite: "strict", //csrf attack
    })
}

module.exports = createTokenAndCookie