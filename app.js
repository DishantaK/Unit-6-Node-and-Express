// Required Modules / Data

const express = require('express');
const path = require('path')
const data = require('./data.json');
const projects = data.projects;

// Server & Views
const app = express();
app.set('view engine', 'pug');
app.set("views", path.join(__dirname, "views"));


// Routes 
app.get('/', function (req, res) {
     
    res.render('index', {projects})
  })
app.get('/about', function (req, res) {
    res.render('about')
  })
app.get('/projects/:id', function (req, res) {
    let id = req.params.id;
    const project = projects[id];

    res.render('project', {project})
    // customize w/ object / come back to
  })

  app.get('/', function (req, res) {
     
    res.render('index', {projects})


  })



  //Middleware
  app.use('/static', express.static('public')) //Serves resources from public folder

  app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
  });

  app.use(function (error, req, res, next) {
    console.log(error)
    res.render("page-not-found");
  
})
  
app.listen(3000);

