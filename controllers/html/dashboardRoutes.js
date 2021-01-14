const axios = require('axios').default;
const securityScan = require('../../utils/auth');
const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

//this is the GET methond to get the Forum Blog
router.get("/", (req, res) => {
  console.log("dashboard routes GET route")
    res.render("home")

})
//this is the POST methond to get the Forum Blog 
router.post('/', securityScan, async (req, res) => {
  console.log("dashboard routes POST route")
  const body = req.body;
  try {
    const newPost = await Post.create({ ...body, userId: req.session.user_id });
    res.redirect("/", newPost);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

//getting the login information-
router.get('/login', (req, res) => {
    console.log("You clicked the login button in the nav bar")
    res.render('login')
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
