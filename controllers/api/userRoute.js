const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
  try {
    console.log("creating user", req.session.user_id)
    const userData = await User.create(req.session.user_id);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    // console.log("login ... userRoute");
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.get('/blogCreate', (req, res) =>{

  if (req.body) {
      res.redirect('/');
      return;
  }

  console.log("SAVED blog INFORMATION", req.body)
  res.render('blog')
});


router.get("/", (req, res) =>{
  res.json("testing")
})

module.exports = router;
