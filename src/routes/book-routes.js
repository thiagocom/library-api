const { Router } = require("express")
const BookController = require("../controllers/book-controller")

const router = Router()

// All books
router.get("/", BookController.all)

module.exports = router