import { Schema, model, models } from "mongoose";
const IngredientSchema = new Schema(

    {
        item: {type: String, required: true, trim: true},
        qty: {type: Number, trim: true},
        unit: {type: String,}
    },
    { _id: false }
)

const StepSchema = new Schema(
  {
    text: { type: String, required: true, trim: true },
  },
  { _id: false }
);


const RecipeSchema = new Schema(
  {
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    ingredients: {
        type: [IngredientSchema],
        required: true,
        validate: {
            validator: (v: unknown[]) => Array.isArray(v) && v.length > 0,
            message: "ingredients must have at least one item"
        },
    },
    steps: {
      type: [StepSchema],
      required: true,
      validate: {
        validator: (v: unknown[]) => Array.isArray(v) && v.length > 0,
        message: "steps must have at least one step",
      },
    },
    category: { type: String, required: true }
  },
  { timestamps: true }
);

export default models.Recipe || model("Recipe", RecipeSchema);