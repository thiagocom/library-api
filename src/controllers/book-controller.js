const Book = require("../models/book-model")

class BookController {

	static async all(req, res, next) {
		const books = await Book.find().populate("authors")
		res.json({ data: books })
	}

}

module.exports = BookController