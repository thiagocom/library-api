const { Schema, model } = require("mongoose")

const BookSchema = new Schema({
	title: { type: String, required: true },
	published: { type: Date, required: true },
	authors: [
		{ type: Schema.Types.ObjectId, ref: "Author" }
	]
}, { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } })

module.exports = model("Book", BookSchema)