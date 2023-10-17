const Skill = require("../models/skill");

module.exports = {
  index,
  show,
};

function show(req, res) {
  res.render("skills/show"),
    {
      skills: Skill.getAll(),
      title: "Programming Skills",
    };
}
function index(req, res) {
  res.render("skills/index", {
    skills: Skill.getAll(),
    title: "All Skills",
  });
}
