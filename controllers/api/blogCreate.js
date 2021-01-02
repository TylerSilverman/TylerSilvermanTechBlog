  
const router = require('express').Router();
const { Project } = require('../../models');


router.get('/dashboard', async (req, res)=>{
    res.json("testing blog Create")
    console.log("blogcreated.js in api")
    // res.render('blogCreate')
})

router.post('/blogCreate', async (req, res) => {
    try {
      console.log("post route hitting ")
      const newBlogPost = await Project.create({
        ...req.body,
        email: req.session.email,
      });
  
      res.json(newBlogPost)
    } catch (err) {
      res.status(400).json(err.message);
    }
  });





module.exports = router;