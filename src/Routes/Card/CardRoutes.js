const express = require("express");
const router = express.Router();
const card_ctrl = require("../../Controllers/Card/CardControllers");

router.get("/:limit?", card_ctrl.getCardsLimited);
router.post("/", card_ctrl.postCard);
router.delete("/:cardid", card_ctrl.deleteCard);
module.exports = router;
