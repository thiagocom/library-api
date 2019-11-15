const { Schema, model } = require("mongoose")

const BookSchema = Schema({
	title: { type: String, required: true },
	published: { type: Date, required: true },
	authors: [
		{ type: Schema.Types.ObjectId, ref: "Author" }
	]
})

module.exports = model("Book", BookSchema)