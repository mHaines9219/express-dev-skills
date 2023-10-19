const Skill = require("../models/skill");

module.exports = {
  show,
  index,
  new: newSkill,
  create,
};

function show(req, res) {
  res.render("skills/show", {
    skill: Skill.getOne(req.params.id),
    title: "Programming Skills",
  });
}
function index(req, res) {
  res.render("skills/index", {
    skills: Skill.getAll(),
    title: "All Skills",
  });
}

function newSkill(req, res) {
  res.render("skills/addSkill", { title: "Add New Skill" });
}

function create(req, res) {
  console.log(req.body);
  // The model is responsible for creating data
  Skill.create(req.body);
  // Do a redirect anytime data is changed
  res.redirect("/skills");
}
