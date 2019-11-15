const { Schema, model } = require("mongoose")

const AuthorSchema = Schema({
	name: { type: String, required: true },
	books: [
		{ type: Schema.Types.ObjectId, ref: "Book" }
	]
})

module.exports = model("Author", AuthorSchema)