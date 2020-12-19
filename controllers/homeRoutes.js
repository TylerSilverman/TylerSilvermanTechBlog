// const router = require("./api/projectRoutes");

const router = require('express').Router();
// const { Project } = require('./models');

router.get('/', async (req, res) =>{
    try {
        const projects = await Project.findAll ({
        });
        const newUsers = projects.map((projects) => 
            projects.get({plain: true})
        )
        console.log(newUsers);
        res.render("home", {newProjects});
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router;