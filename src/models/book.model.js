import mongoose, { Schema } from "mongoose";

const bookSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		author: {
			type: String,
			required: true,
		},
		publicationYear: {
			type: Number,
			required: true,
		},
		printingYear: {
			type: Number,
			required: true,
		},
		genre: {
			type: [String], // Array of genres
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		images: {
			type: [String], // Array of image URLs
			required: true,
		},
		pages: {
			type: Number,
			required: true,
		},
		condition: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		uploadedBy: {
			type: Schema.Types.ObjectId, 
			ref: "User",
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

export const Book = mongoose.model("Book", bookSchema);
