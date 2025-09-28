export type RecipeTemplate = {
    id: number;
    name: string;
    ingredients: Ingredient[];
    steps: Step[];
    category: string;
};


export type Ingredient = { qty?: Number; unit?: string; item: string };
export type Step = { text: string };