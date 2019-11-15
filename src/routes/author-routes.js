const { Router } = require("express")
const AuthorController = require("../controllers/author-controller")

const router = Router()

// All authors
router.get("/", AuthorController.all)

module.exports = router