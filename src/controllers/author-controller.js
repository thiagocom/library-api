const Author = require("../models/author-model")

class AuthorController {

	static async all(req, res, next) {
		const authors = await Author.find().populate("books")
		res.json({ data: authors })
	}

}

module.exports = AuthorController