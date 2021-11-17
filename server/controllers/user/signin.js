const { access } = require('fs');
const { user } = require('../../models');
const { generateAccessToken, sendAccessToken } = require('../tokenfunction');

module.exports = async (req, res) => {
  const { email, password } = req.body;
  const needInfo = await user.findOne({where: req.body});

  if(!needInfo) { // 로그인 정보가 일치하지 않을 때
    res.status(404).send('Invalid user or Wrong password');
  } else {
    // jwt 토큰 처리
    const accessToken = generateAccessToken(needInfo.dataValues); // 토큰에 정보를 담아서
    sendAccessToken(res, accessToken) // 쿠키로 전달
    res.status(200).json({data: accessToken, message: 'ok'}); // 데이터는 토큰 정보를 가지고 있어야 함
  }
};