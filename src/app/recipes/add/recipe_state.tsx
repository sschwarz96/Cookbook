'use client';
import {useState} from 'react';
import Box from '@mui/material/Box';
import {Recipe} from '@/types/types';
import RecipeForm from "@/Components/recipe_form";

let id = 0;

export default function RecipeState() {
    const [name, setName] = useState('');
    const [ingredient, setIngredient] = useState('');
    const [step, setStep] = useState('');
    const [category, setCategory] = useState('Meal type');

    const addRecipe = async () => {
        const recipe: Recipe = {
            id: id++,
            name,
            ingredients: [ingredient],
            steps: [step],
            category,
        };
        await fetch('/api/create-recipe', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(recipe),
        });
    };

    return (
        <Box
            component="main"
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'background.default',
                px: 2, // page-side padding on small screens
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    maxWidth: 720,   // adjust: 560, 640, 720, etc.
                    bgcolor: 'background.paper',
                    borderRadius: 2,
                    boxShadow: 3,
                    p: { xs: 2, sm: 3 },
                }}
            >
                <RecipeForm /> {/* your existing form component */}
            </Box>
        </Box>

    );
}
