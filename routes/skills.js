var express = require("express");
var router = express.Router();
var skillsCtrl = require("../controllers/skills");

router.get("/addSkill", skillsCtrl.new);
router.get("/", skillsCtrl.index);
router.get("/:id", skillsCtrl.show);
router.post("/", skillsCtrl.create);
router.delete("/:id", skillsCtrl.delete);

module.exports = router;
