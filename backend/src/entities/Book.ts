import { model, Schema } from "mongoose";

const schema = new Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    discountRate: { type: Number, required: true, min: 1, max: 99 },
    price: { type: Number, required: true },
    image: { type: String, required: true },
  },
  { minimize: true, timestamps: true }
);

export default model("Book", schema);
