const { user } = require('../../models');

module.exports = async (req, res) => {
  const userId = req.params.id;
  const {nickName, password, phone} = req.body;
  const changeUser = await user.findOne({where: userId});

  if(!changeUser) {
    res.status(404).send('not found');
  } else if(user.nickName === nickName && user.password === password && user.phone === phone) {
    res.status(400).send('Same data')
  } else {
    user.update({nickName: nickName, password: password, phone: phone});
    res.status(200).send('changed userinfo');
  }
};