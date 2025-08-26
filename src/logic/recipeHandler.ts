import fs from "fs"
import {Recipe} from "@/types/types";

export const createRecipeJson = (recipe: Recipe) => {
    fs.writeFile("./src/data/recipes.json", JSON.stringify(recipe), 'utf8', (err) => {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log('File written successfully');
        }
    });
}