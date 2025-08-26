"use client"
import React from 'react';
import {Button} from "@mui/material";
import {Stack} from "@mui/system";
import {useRouter} from "next/navigation";
import {addRecipe} from "@/routes/routes";

const ButtonGroup = () => {
    const router = useRouter();
    return (
        <Stack spacing={4} direction="column" alignItems="center" className="m-10 w-1/4">
            <Button variant="contained" onClick={() => router.push(addRecipe)}>Add Recipe</Button>
            <Button variant="contained">Scan Recipe</Button>
        </Stack>
    );
};


export default ButtonGroup;