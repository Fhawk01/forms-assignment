exports.form_post = function (req, res) {
  let birdData = {
    species: req.body.species,
    nickname: req.body.nickname,
    status: req.body.status,
  };

  console.log(birdData);

  res.render('thank-you', birdData);
};
