const router = require('express').Router();


router.get('/dashboard', async (req, res)=>{
    res.json("testing blog Create")
    console.log("blogcreated.js in api")
    // res.render('blogCreate')
})

router.post('/blogCreate', async (req, res) => {
    try {
      console.log("post route hitting ")
      const newProject = await Project.create({
        ...req.body,
        email: req.session.email,
      });
  
     
    } catch (err) {
      res.status(400).json(err.message);
    }
  });





module.exports = router;
