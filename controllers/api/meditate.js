const router = require('express').Router();
const { Post, Comment } = require('../../models');

router.post('/:id/comment', async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      email: req.session.user_id,
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

router.get('/', async (req, res) => {
  res.render('userDashboard');
})

router.delete('/:id', async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        email: req.session.email,
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'No project found with this id from the dashboard!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
