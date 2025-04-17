// server/App/jwt/generateToken.js
const jwt = require("jsonwebtoken");

const createTokenAndSaveCookie = (userId, res) => {
    // const token = jwt.sign({ userId }, process.env.JWT_TOKEN, {
    const token = jwt.sign({ userId }, "iFt5d+oIl9/+oRxEggRpgj2XGBUi1n+px9Ag/5TEUj4=", {
      expiresIn: "10d",
    });
    res.cookie("jwt", token, {
      httpOnly: true, // xss
      secure: true,
      sameSite: "strict", // csrf
    });
  };
 module.exports=createTokenAndSaveCookie