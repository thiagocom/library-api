const { Router } = require("express")
const BookController = require("../controllers/book.controller")

const router = Router()

// All books
router.get("/", BookController.all)
router.get("/:id", BookController.get)
router.post("/", BookController.create)
router.delete("/:id", BookController.delete)

module.exports = router