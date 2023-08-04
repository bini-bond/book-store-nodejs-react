import { model, Schema } from "mongoose";
import mongoose from "mongoose";

const schema = new Schema(
  {
    bookId: { type: mongoose.Types.ObjectId, ref: "Book", required: true },
    user: { type: String, required: true },
    price: { type: Number, required: true },
  },
  { minimize: true, timestamps: true }
);

export default model("Purchase", schema);
