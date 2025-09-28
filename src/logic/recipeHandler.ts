import fs from "fs"
import RecipeSchema from "@/models/Recipe";
import {RecipeTemplate} from "@/types/types"
import { dbConnect } from "@/lib/mongoose";

export const createRecipeJson = async (recipe: RecipeTemplate) => {
   await dbConnect();
   const createdRecipe = await RecipeSchema.create(recipe);
   return createdRecipe
}