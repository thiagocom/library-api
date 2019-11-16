const Author = require("../models/author.model")

class AuthorController {

	static async all(req, res, next) {
		const authors = await Author.find().populate("books").sort("-created_at")
		res.json({ data: authors })
	}

	static async get(req, res, next) {
		const { id } = req.params
		const author = await Author.findById(id).populate("books")
		res.json({ data: author })
	}

	static async create(req, res, next) {
		const { name } = req.body
		const author = await Author.create({ name })
		res.json({ data: author })
	}

	static async update(req, res, next) {
		const { id } = req.params
		const { name } = req.body
		const author = await Author.findByIdAndUpdate(id, { name }, { new: true })
		res.json({ data: author })
	}

	static async delete(req, res, next) {
		const { id } = req.params
		await Author.findByIdAndDelete(id)
		res.sendStatus(204)
	}

}

module.exports = AuthorController