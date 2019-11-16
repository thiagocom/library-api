const { Router } = require("express")
const AuthorController = require("../controllers/author.controller")

const router = Router()

// All authors
router.get("/", AuthorController.all)
router.get("/:id", AuthorController.get)
router.post("/", AuthorController.create)
router.put("/:id", AuthorController.update)
router.delete("/:id", AuthorController.delete)

module.exports = router