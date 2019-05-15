const Skill = require('../models/skill')


module.exports = {
    index,
    show,
    new: newskill,
    create,
    delete: deleteskill,
    edit,
    update
};

function update(req, res){
    req.body.done = !!req.body.done
    Skill.update(req.params.id, req.body);
    res.redirect(`/skills`);
}

function edit(req, res){
    var skill = Skill.getOne(req.params.id);
    res.render('skills/edit', {
        skill,
        skillId: req.params.id
    })
}

function deleteskill(req, res){
    Skill.deleteOne(req.params.id);
    res.redirect('/skills')
}

function create(req, res){
    req.body.done = false;
    Skill.create(req.body);
    res.redirect('/skills');
}

function newskill(req, res){
    res.render('skills/new')
}


function show (req, res){
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        skillNum: parseInt(req.params.id) + 1
    });
}

function index (req, res) {
    res.render('skills/index', {
        skills: Skill.getAll()
    });
};