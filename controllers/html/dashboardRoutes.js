const axios = require('axios').default;
const securityScan = require('../../utils/auth');
const router = require('express').Router();
const { User, Post} = require('../../models');

//this is the GET methond to get the Forum Blog
router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const posts = postData.map((project) => project.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('home', { 
      posts, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/post/:id', async (req, res) => {
  try {
    const posttData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const posts = posttData.get({ plain: true });

    res.render('home', {
      ...posts,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
//this is the POST methond to get the Forum Blog 
router.post('/', securityScan, async (req, res) => {
  console.log("dashboard routes POST route")
  const body = req.body;
  try {
    const newPost = await Post.create({ ...body, user_id: req.session.user_id });
    res.redirect("/");
  } catch (err) {
    res.status(500).json(err.message);
  }
});

//getting the login information-
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/home');
    return;
  }

  res.render('login');
});



///after getting to dashboard and click actiity it direct to the mediate.handlebars
router.get("/meditate", securityScan, async (req, res) => {
    res.render('meditate')

})

//after clicking create User it redirects to the login screen and then redirects to the game page 
router.get("/createUser", (req, res) => {

    console.log("Click the Register Button in nav bar and total users saved in DataBase ", req.session.user_id)
    res.render('createUser')

})

router.get("/dashboard", securityScan, (req, res) => {
    console.log("clicking dashboard button in nav bar")
    res.render("userDashboard")

})

router.get('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.redirect("/login")
        // res.status(204).end();
      });
    } 
    res.redirect("/login");
  });

module.exports = router;
