const skills = [
  {
    id: 111,
    skill: "CSS",
    learned: true,
  },
  {
    id: 112,
    skill: "HTML",
    learned: true,
  },
  {
    id: 113,
    skill: "CANVAS",
    learned: true,
  },
  {
    id: 114,
    skill: "PYTHON",
    learned: false,
  },
  {
    id: 115,
    skill: "REACT",
    learned: false,
  },
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
};
function create(skill) {
  // Add the id
  skill.id = 119;
  // New todos wouldn't be done :)
  skill.learned = true;
  skills.push(skill);
}

function getOne(id) {
  id = parseInt(id);
  return skills.find((skill) => skill.id === id);
}

function getAll() {
  return skills;
}

function deleteOne(id) {
  // All properties attached to req.params are strings!
  // Find the index based on the id of the todo object
  const idx = skills.findIndex((skill) => skill.id === id);
  skills.splice(idx, 1);
}
