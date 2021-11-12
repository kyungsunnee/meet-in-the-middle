const { users } = require('../../models');

module.exports = async (req, res) => {
  const { email, password } = req.body;
  const needInfo = await users.findOne({where: req.body});

  if(!needInfo) {
    res.status(404).send('Invalid user or Wrong password');
  } else {
    // jwt 토큰 처리
    res.status(200).json({data:null, message: 'ok'});
  }
};