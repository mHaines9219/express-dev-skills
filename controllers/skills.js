const Skill = require("../models/skill");

module.exports = {
  show,
  index,
  new: newSkill,
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
