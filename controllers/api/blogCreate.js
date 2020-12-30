const router = require('express').Router();


router.get('/blogCreate', async (req, res)=>{
    res.json("testing blog Create")
    res.render('blogCreate')
})

router.post('/blogCreate', async (req, res) => {
    try {
      const newProject = await Project.create({
        ...req.body,
        email: req.session.email,
      });
  
      res.status(200).json(newProject);
    } catch (err) {
      res.status(400).json(err);
    }
  });





module.exports = router;
