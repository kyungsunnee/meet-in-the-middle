const { users } = require('../../models');

module.exports = async (req, res) => {
  const { email, password, userName, nickName, birth, phone } = req.body;
  const userInfo = await users.findOne({where: req.body});

  if(userInfo) { // 이미 유저정보가 존재할때
    res.status(409).send('Email already exists');
  } else {
    users.create({email: email, password: password, userName: userName, nickName: nickName, birth: birth, phone: phone})
    // 쿠키로 해당 유저의 패스워드를 삭제한 뒤 나머지 정보 전달(토큰)
    res.status(201).json({data: null, message: 'User created'});
  }
};