import {RecipeTemplate} from "@/types/types";
import {createRecipeJson} from "@/logic/recipeHandler";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const recipe: RecipeTemplate = await request.json()
    const createdRecipe = await createRecipeJson(recipe)
    return NextResponse.json(createdRecipe, {status: 201})
}
