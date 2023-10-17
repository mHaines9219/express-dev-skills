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
};

function getOne(id) {
  id = parseInt(id);
  return skills.find((skill) => skill.id === id);
}

function getAll() {
  return skills;
}
