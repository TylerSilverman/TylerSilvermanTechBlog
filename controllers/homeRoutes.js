const router = require('express').Router();
const { User, Project } = require('../models');


//GET all galleries from the homepage
router.get('/', async (req, res) =>{
    try {
        const dbProjectData = await Project.findAll ({
            include: [{
                model: User,
                attributes: ["username", "email"],
            },
        ],
        });
        const newProjects = dbProjectData.map((projects) => 
            projects.get({plain: true})
        );
        console.log(newProjects);
        res.render("home", {
            newProjects,
            loggedIn: req.session.loggedIn,
        });
    } catch (error) {
        res.status(400).json(error)
    }
});

//this is getting the login.handlebars layout
router.get('/login', (req, res) =>{

    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    console.log("SAVED LOGIN INFORMATION", req.body)
    res.render('login')
});

//this is posting the information that was submitted in the login.handlebars layout
router.post('/login', (req, res) =>{
    
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    console.log("POST LOGIN INFORMATION", req.body)
    res.render('login')
});

router.get('/dashboard', (req, res) =>{

    if (req.session.loggedIn) {
        res.redirect('/dashboard');
        return;
    }

    console.log("SAVED LOGIN INFORMATION", req.body)
    res.render('dashboard')
});

router.post('/subscribe', (req, res) =>{

    if (req.session.loggedIn) {
        res.redirect('/subscribe');
        return;
    }
    console.log("SAVED Signup INFORMATION", req.body)
    res.render('subscribe')
});

//getting the api from blogCreate handlebar and displaying info
router.get('/blogCreate', (req, res) =>{

    if (req.session.email) {
        res.redirect('/blogCreate');
        return;
    }
    res.render('blogCreate')
})

//getting the api from blogCreate handlebar and displaying info
router.get('/subscribe', (req, res) =>{

    if (req.session.loggedIn) {
        res.redirect('/subscribe');
        return;
    }
    res.render('subscribe')
})





module.exports = router;
