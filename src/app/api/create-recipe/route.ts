import {Recipe} from "@/types/types";
import {createRecipeJson} from "@/logic/recipeHandler";

export async function POST(request: Request) {
    const recipe: Recipe = await request.json()
    createRecipeJson(recipe)
    return Response.json({recipe})
}
