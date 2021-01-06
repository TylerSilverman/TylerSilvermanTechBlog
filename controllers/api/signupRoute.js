const router = require('express').Router();
const { User } = require('../../models');

router.post('/signup', async (req, res) => {
    try {
      console.log("saved registerUser INFORMATION", req.body)
      const newUserData = await User.create(req.body);
  
      req.session.save(() => {
        req.session.user_id = newUserData.id;
        req.session.logged_in = true;
  
        res.redirect("/dashboard")
      });
    } catch (err) {
      res.status(400).json(err.message);
    }
  });
  
  router.post('/login', async (req, res) => {
    try {
        console.log("login ")
      const newUserData = await User.findOne({ where: { email: req.body.email } });
  
      if (!newUserData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      const validPassword = await newUserData.checkAuth(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = newUserData.id;
        req.session.logged_in = true;
        
        res.redirect("/dashboard")
      });
  
    } catch (err) {
      res.status(400).json(err.message);
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

module.exports = router