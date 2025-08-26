"use client";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';

import {Grid2} from "@mui/material";
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';

function generate(element: React.ReactElement<any>) {
    return [0, 1, 2].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

const Demo = styled('div')(({theme}) => ({
    backgroundColor: theme.palette.background.paper,
}));

export default function InteractiveList() {
    return (
        <Box sx={{flexGrow: 1, maxWidth: 400}}>
            <Grid2 container spacing={2}>
                <Grid2>
                    <Typography sx={{mt: 4, mb: 2}} variant="h6" component="div">
                        Favorite Recipes
                    </Typography>
                    <Demo>
                        <List>
                            {generate(
                                <ListItem>
                                    <StarIcon>
                                        <FolderIcon/>
                                    </StarIcon>
                                    <ListItemText
                                        primary="Recipe"
                                    />
                                </ListItem>,
                            )}
                        </List>
                    </Demo>
                </Grid2>
            </Grid2>
        </Box>
    );
}