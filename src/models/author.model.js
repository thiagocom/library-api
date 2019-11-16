const { Schema, model } = require("mongoose")

const AuthorSchema = new Schema({
	name: { type: String, required: true },
	books: [
		{ type: Schema.Types.ObjectId, ref: "Book" }
	]
}, { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } })

module.exports = model("Author", AuthorSchema)