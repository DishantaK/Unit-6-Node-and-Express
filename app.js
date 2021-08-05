// Required Modules / Data

const express = require('express');
const path = require('path')
const data = require('./data.json');
const projects = data.projects;

// Server & Views
const app = express();
app.set('view engine', 'pug');
app.set("views", path.join(__dirname, "views"));


app.use('/static', express.static('public')) //Serves resources from public folder

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


 




  //Middleware / Errors
  
  app.use(function (req, res, next) {
    console.log("Apologies, but this page does not exist")
    res.status(404).render("page-not-found");
  
})
  
app.listen(3000);

