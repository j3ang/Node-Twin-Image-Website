var router = require('express').Router()
var faker = require('faker')
var Project = require('../models/project')

router.get('/add-project', function(req, res, next) {
    res.render('main/add-project')
})

router.post('/add-project', function(req, res, next) {
    var project = new Project()

    project.category = req.body.category_name
    project.name = req.body.project_name
    project.price = req.body.project_price
    project.cover = faker.image.image()

    project.save(function(err) {
        if (err) throw err
        res.redirect('/add-project')
    })
})

router.get('/generate-fake-data', function(req, res, next) {
    for (var i = 0; i < 90; i++) {
        var project = new Project()

        project.category = faker.commerce.department()
        project.name = faker.commerce.productName()
        project.price = faker.commerce.price()
        project.cover = faker.image.image()

        project.save(function(err) {
            if (err) throw err
        })
    }
    res.redirect('/add-project')
})

router.get('/projects/:page', function(req, res, next) {
    var perPage = 9
    var page = req.params.page || 1

    Project
        .find({})
        .skip((perPage * page) - perPage)
        .limit(perPage)
        .exec(function(err, projects) {
            Project.count().exec(function(err, count) {
                if (err) return next(err)
                res.render('main/projects', {
                    title: "Projects",
                    projects: projects,
                    current: page,
                    pages: Math.ceil(count / perPage)
                })
            })
        })
})


module.exports = router;