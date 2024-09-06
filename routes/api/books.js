const express = require("express");
const ctrl = require("../../controllers/books");

const addschems = require("../../schemas/books");
const { validateBody } = require("../../middlewares");

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:id", ctrl.getById);

router.post("/", validateBody(addschems), ctrl.add);

router.put("/:id", validateBody(addschems), ctrl.updateById);

router.delete("/:id", ctrl.deleteById);

module.exports = router;
