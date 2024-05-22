const { Router } = require("express");
const { getGroupDepartment } = require("../controllers/GroupdataController");

const router = Router();
router.get("/", getGroupDepartment);
module.exports = router;
