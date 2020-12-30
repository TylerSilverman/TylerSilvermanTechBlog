const router = require('express').Router();
const { Project } = require('../../models');

router.post('/', async (req, res) => {
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

router.get('/', async (req, res) => {
  res.render('dashboard');
})

router.delete('/:id', async (req, res) => {
  try {
    const projectData = await Project.destroy({
      where: {
        id: req.params.id,
        email: req.session.email,
      },
    });

    if (!projectData) {
      res.status(404).json({ message: 'No project found with this id from the dashboard!' });
      return;
    }

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
