const { user } = require('../../models');

module.exports = async (res, req) => {
  const {email, userName, birth, phone} = req.body;
  const deleteUser = await user.findOne({where: req.body});

  if(!deleteUser) {
    res.status(404).send('not found');
  } else {
    user.destroy({where: req.body});
    res.status(200).send('successfully withdrew');
  }
};