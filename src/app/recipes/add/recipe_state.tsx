'use client';
import Box from '@mui/material/Box';
import RecipeForm from "@/components/recipe_form";

let id = 0;

export default function RecipeState() {
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
