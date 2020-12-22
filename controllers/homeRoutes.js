// const router = require("./api/projectRoutes");

const router = require('express').Router();
const { Project } = require('../models');

router.get('/', async (req, res) =>{
    try {
        const projects = await Project.findAll ({
        });
        const newProjects = projects.map((projects) => 
            projects.get({plain: true})
        )
        console.log(newProjects);
        res.render("home", {newProjects});
    } catch (error) {
        res.status(400).json(error)
    }
})
router.get('/login', (req, res) =>{

    console.log("did it work with login", req.body)
    res.render('login')
});

router.post('/login', (req, res) =>{

    console.log("did it work with login", req.body)
    res.render('login')
});

// router.post ('/', req, res) = {

// }







module.exports = router;
