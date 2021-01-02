const router = require('express').Router();
const { User, Project } = require('../models');


//GET all galleries from the homepage
router.get('/', async (req, res) =>{
    try {
        const dbProjectData = await Project.findAll ({
            include: [{
                model: User,
                attributes: [ "email", "password"],
            },
        ],
        });
        const newProjects = dbProjectData.map((projects) => 
            projects.get({plain: true})
        );
        console.log(newProjects);
        res.render("home", {
            newProjects,
            logged_in: req.session.logged_in,
        });
    } catch (error) {
        res.status(400).json(error)
    }
});

//this is getting the login.handlebars layout
router.get('/login', (req, res) =>{

    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }

    console.log("SAVED registry INFORMATION", req.session.logged_in)
    res.render('login')
});

//this is posting the information that was submitted in the login.handlebars layout

router.get('/dashboard', (req, res) =>{

    if (req.session.logged_in) {
        res.render('dashboard');
        return;
    }

    console.log("SAVED login INFORMATION",req.session.logged_in)
    res.redirect('/login')
});


//getting the api from blogCreate handlebar and displaying info
// router.get('/blogCreate', (req, res) =>{

//     if (req.body) {
//         res.redirect('/blogCreate');
//         return;
//     }
//     console.log("SAVED blog Created INFORMATION", req.body)
//     res.render('blogCreate')
// })

//getting the api from blogCreate handlebar and displaying info
router.get('/subscribe', (req, res) =>{

    if (req.session.logged_in) {
        res.render('dashboard');
        return;
    }
    console.log("subscribe INFORMATION", req.session.logged_in)
    res.render('subscribe')
})





module.exports = router;
