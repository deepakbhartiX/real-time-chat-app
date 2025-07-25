const { response } = require('express');
const jwt = require('jsonwebtoken');

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