'use client';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, IconButton, MenuItem } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRouter } from "next/navigation";
import { home } from "@/routes/routes";

type Ingredient = { qty?: string; unit?: string; item: string };
type Step = { text: string };

export default function RecipeForm() {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('Starter');
    const [ingredients, setIngredients] = useState<Ingredient[]>([{ qty: '', unit: '', item: '' }]);
    const [steps, setSteps] = useState<Step[]>([{ text: '' }]);
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);
    const router = useRouter();


    const addIngredient = () => setIngredients(prev => [...prev, { qty: '', unit: '', item: '' }]);
    const removeIngredient = (i: number) => setIngredients(prev => prev.filter((_, idx) => idx !== i));
    const updateIngredient = (i: number, patch: Partial<Ingredient>) =>
        setIngredients(prev => prev.map((ing, idx) => (idx === i ? { ...ing, ...patch } : ing)));

    const addStep = () => setSteps(prev => [...prev, { text: '' }]);
    const removeStep = (i: number) => setSteps(prev => prev.filter((_, idx) => idx !== i));
    const updateStep = (i: number, text: string) =>
        setSteps(prev => prev.map((s, idx) => (idx === i ? { text } : s)));


    useEffect(() => {
        validateForm();
    }, [name, ingredients, steps]);
    // Validate form
    const validateForm = () => {
        if (!name) {
            errors.name = 'Name is required.';
        }

        if (!ingredients.length || !ingredients[0].item || !ingredients[0].qty || !ingredients[0].unit) {
            errors.ingredients = 'Ingredients are required.';
        }

        if (!steps.length || !steps[0].text) {
            errors.steps = 'Steps are required.';
        }
        setErrors(errors);
        setIsFormValid(Object.keys(errors).length === 0);
    };

    const save = async () => {
        const recipe = {
            id: Date.now(),
            name: name.trim(),
            category,
            ingredients: ingredients.filter(i => i.item.trim() !== ''), // drop empties
            steps: steps.filter(s => s.text.trim() !== ''),
        };
        // TODO: validate fields before sending
        await fetch('/api/create-recipe', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(recipe),
        });
        router.push(home)
    };


    const cancel = () => {
        router.push(home)

    }

    return (
        <Box component="form" sx={{ display: 'grid', gap: 2, maxWidth: 900 }}>
            {/* Name */}
            <TextField
                label="Recipe name"
                variant="standard"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
            />

            {/* Two columns */}
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2 }}>
                {/* Ingredients */}
                <Box sx={{ border: '1px solid #e5e7eb', borderRadius: 1, p: 2, minHeight: 200, maxHeight: 320, overflowY: 'auto' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                        <strong>Ingredients</strong>
                        <Button size="small" onClick={addIngredient}>+ Add ingredient</Button>
                    </Box>
                    {ingredients.map((ing, i) => (
                        <Box key={i} sx={{ display: 'grid', gridTemplateColumns: '80px 100px 1fr auto', gap: 1, alignItems: 'center', mb: 1 }}>
                            <TextField
                                label="Qty"
                                size="small"
                                value={ing.qty ?? ''}
                                onChange={(e) => updateIngredient(i, { qty: e.target.value })}
                            />
                            <TextField
                                label="Unit"
                                size="small"
                                value={ing.unit ?? ''}
                                onChange={(e) => updateIngredient(i, { unit: e.target.value })}
                            />
                            <TextField
                                label="Item"
                                size="small"
                                value={ing.item}
                                onChange={(e) => updateIngredient(i, { item: e.target.value })}
                            />
                            <IconButton aria-label="remove ingredient" onClick={() => removeIngredient(i)}>
                                <DeleteIcon fontSize="small" />
                            </IconButton>
                        </Box>
                    ))}
                </Box>

                {/* Steps */}
                <Box sx={{ border: '1px solid #e5e7eb', borderRadius: 1, p: 2, minHeight: 200, maxHeight: 320, overflowY: 'auto' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                        <strong>Steps</strong>
                        <Button size="small" onClick={addStep}>+ Add step</Button>
                    </Box>
                    <ol style={{ margin: 0, paddingInlineStart: '1.25rem' }}>
                        {steps.map((s, i) => (
                            <li key={i} style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 8, alignItems: 'start', marginBottom: 8 }}>
                                <TextField
                                    multiline
                                    minRows={2}
                                    label={`Step ${i + 1}`}
                                    size="small"
                                    value={s.text}
                                    onChange={(e) => updateStep(i, e.target.value)}
                                />
                                <IconButton aria-label="remove step" onClick={() => removeStep(i)}>
                                    <DeleteIcon fontSize="small" />
                                </IconButton>
                            </li>
                        ))}
                    </ol>
                </Box>
            </Box>

            {/* Meal type */}
            <TextField
                label="Meal type"
                select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                sx={{ width: 300 }}
            >
                {['Starter', 'Main', 'Dessert'].map(opt => (
                    <MenuItem key={opt} value={opt}>{opt}</MenuItem>
                ))}
            </TextField>

            {/* Actions */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
                <Button variant="contained" onClick={cancel}>Cancel</Button>
                <Button variant="contained" onClick={save}>Save recipe</Button>

            </Box>
        </Box>
    );
}
