const router = require('express').Router();
const { Post, Comment } = require('../../models');
const securityScan = require('../../utils/auth');

router.post('/', securityScan, async (req, res) => {
    try {
      const newProject = await Post.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newProject);
    } catch (err) {
      res.status(400).json(err);
    }
  });
//add the comment section on the home tab
  router.post('/comments', securityScan, async (req, res) => {
    try {
      const newComment = await Comment.create({
        ...req.body,
        user_id: req.session.user_id,
      });
      res.redirect("/")
      // res.status(200).json(newComment);
    } catch (err) {
      res.status(400).json(err.message);
    }
  });
  
  router.delete('/:id', securityScan, async (req, res) => {
    try {
      const projectData = await Post.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!projectData) {
        res.status(404).json({ message: 'No Post found with this id!' });
        return;
      }
  
      res.status(200).json(projectData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
