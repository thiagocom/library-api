const Book = require("../models/book.model")
const Author = require("../models/author.model")

class BookController {

	static async all(req, res, next) {
		const books = await Book.find().populate("authors").sort("-created_at")
		res.json({ data: books })
	}

	static async get(req, res, next) {
		const { id } = req.params
		const book = await Book.findById(id).populate("authors")
		res.json({ data: book })
	}

	static async create(req, res, next) {
		const { title, published, author_id } = req.body
		const author = await Author.findById(author_id)
		const book = await Book.create({ title, published })
		book.authors.push(author)
		author.books.push(book)
		book.save()
		author.save()
		book.populate("authors")
		res.json({ data: book })
	}

	static async update(req, res, next) {
		const { id } = req.params
		const book = await Book.findByIdAndUpdate(id, req.body, { new: true })
		res.json({ data: book })
	}

	static async delete(req, res, next) {
		const { id } = req.params
		await Book.findByIdAndDelete(id)
		res.sendStatus(204)
	}

}

module.exports = BookController